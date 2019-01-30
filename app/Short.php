<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Short extends Model
{
    public $table = 'shorts';
    
    protected $fillable = ['id', 'url', 'page_title','short_url','views'];
}
