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
            $table->integer('link_id');
            $table->string('type');
            $table->string('url');
            $table->string('color');
            $table->timestamps();
        });



        DB::table('icons')->insert(
            array(
                'link_id' => '1',
                'type' => 'fab',
                'url' => 'fa-github',
                'color'=>'#000'
            ));

            DB::table('icons')->insert(
            array(
                'link_id' => '1',
                'type' => 'fab',
                'url' => 'fa-linkedin-in',
                'color'=>'#00d'
            ));

            DB::table('icons')->insert(
            array(
                'link_id' => '3',
                'type' => 'fab',
                'url' => 'fa-github',
                'color'=>'#000'
            ));

            DB::table('icons')->insert(
            array(
                'link_id' => '4',
                'type' => 'fab',
                'url' => 'fa-github',
                'color'=>'#000'
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
