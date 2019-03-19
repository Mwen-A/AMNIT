<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('links', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('title');
            $table->string('url');
            $table->timestamps();
        });


        DB::table('links')->insert(
            array(
                'id'=>'1',
                'user_id' => '1',
                'title' => 'GitHub',
                'url' => 'https://github.com/markoboy'
            ));

            DB::table('links')->insert(
            array(
                'id'=>'2',
                'user_id' => '1',
                'title' => 'LinkedIn',
                'url' => 'https://github.com/markoboy'
            ));

            DB::table('links')->insert(
                array(
                    'id'=>'3',
                    'user_id' => '2',
                    'title' => 'GitHub',
                    'url' => 'https://github.com/eslylescano'
                ));


                DB::table('links')->insert(
                    array(
                        'id'=>'4',
                        'user_id' => '3',
                        'title' => 'GitHub',
                        'url' => 'https://github.com/Mwen-A'
                    ));


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('links');
    }
}
