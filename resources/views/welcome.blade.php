<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <base href="/">

        <title>Shortener</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet">

        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <link href="{{mix('css/style.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>    
    <div id="root"></div>
        <script src="{{mix('js/app.js')}}" ></script>
        
        @if(config('app.env') == 'local')
            <script src="http://localhost:35729/livereload.js"></script>
        @endif
    </body>
</html>