<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShortsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shorts', function (Blueprint $table) {
            $table->increments('id',10)->unsigned();
            $table->longText('url');
            $table->string('page_title',255);
            $table->string('short_url');
            $table->integer('views')->unsigned()->default(0);
            $table->timestamps();
        });

        Schema::table('shorts', function (Blueprint $table) {
            $table->string('scheme');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shorts');
    }
}
