<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Exception\ConnectException;
use Goutte\Client as GClient;

use App\Short;

class ShortController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id=null)
    {
        $shorts = Short::where('views','>',0)->limit(100)->Orderby('views','ASC')->get();
        return json_encode($shorts);
    }

    function generate($content, $strength = 8) {
        $contentLength = strlen($content);
        $randString = '';
        for($i = 0; $i < $strength; $i++) {
            $randomChar = $content[mt_rand(0, $contentLength - 1)];
            $randString .= $randomChar;
        }
     
        return $randString;
    }

    public function process(Request $request){
        $client = new Client();

        $longURL = preg_replace('/^[^=]*=\s*/', '', \Request::getRequestUri());

        try {            

            $getScheme = new \GuzzleHttp\Psr7\Request('GET', $longURL,['timeout' => 5]);
            $remoteScheme = $getScheme->getUri()->getScheme();     
            
            $localScheme = $request->getSchemeAndHttpHost();                     

            $longURL = ($remoteScheme ? $longURL : $longURL = 'http://'.$longURL );

            $check = Short::where('url', $longURL)->first();

            if($check){

                return json_encode($check);

            }else{
            
                $response = $client->request('GET', $longURL);         
                
                if($response->getStatusCode()==200){     

                    $client = new GClient();                
                    $crawler = $client->request('GET', $longURL);
                    $title = $crawler->filter('html > head > title');   

                    $base = new \Tuupola\Base62;
                    
                    $short = new Short;
                    $short->page_title = $title->text();
                    $short->url = $longURL;
                    $short->short_url = '';
                    $short->scheme = $localScheme;
                    $short->save();

                    $short->short_url = $this->generate($base->encode(bin2hex($short->id)),6);
                    $short->save();
    
                    return json_encode($short);
                }
            }
            
        } catch (ConnectException $e) {
            echo Psr7\str($e->getRequest());
            if ($e->hasResponse()) {
                echo Psr7\str($e->getResponse());
            }
        }
    }
}
