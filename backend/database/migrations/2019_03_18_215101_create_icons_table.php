<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIconsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('icons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type');
            $table->string('url');
            $table->string('title');
            $table->string('color');
            $table->timestamps();
        });



        DB::table('icons')->insert(
            array(
                'id' => '1',
                'title' => 'GitHub',
                'type' => 'fab',
                'url' => 'fa-github',
                'color'=>'#333333'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '2',
                'title' => 'Linkedin',
                'type' => 'fab',
                'url' => 'fa-linkedin-in',
                'color'=>'#0077b5'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '3',
                'title' => 'Mail',
                'type' => 'fas',
                'url' => 'fa-at',
                'color'=>'#168de2'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '4',
                'title' => 'Portfolio',
                'type' => 'fas',
                'url' => 'fa-link',
                'color'=>'#239ab9'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '5',
                'title' => 'Facebook',
                'type' => 'fab',
                'url' => 'fa-facebook-f',
                'color'=>'#3b5998'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '6',
                'title' => 'Twitter',
                'type' => 'fab',
                'url' => 'fa-twittter',
                'color'=>'#1da1f2'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '7',
                'title' => 'Instagram',
                'type' => 'fab',
                'url' => 'fa-instagram',
                'color'=>'#e1306c'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '8',
                'title' => 'Pinterest',
                'type' => 'fab',
                'url' => 'fa-pinterest',
                'color'=>'#bd081c'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '9',
                'title' => 'Google Plus',
                'type' => 'fab',
                'url' => 'fa-google-plus',
                'color'=>'#dd4b39'
            ));

            DB::table('icons')->insert(
            array(
                'id' => '10',
                'title' => 'Share',
                'type' => 'fas',
                'url' => 'fa-share-alt',
                'color'=>'#0077b5'
            ));


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('icons');
    }
}
