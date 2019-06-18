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
            $table->integer('team_member_id');
            $table->integer('icon_id');
            $table->string('url');
            $table->timestamps();
        });


        DB::table('links')->insert(
            array(
                'id'=>'1',
                'team_member_id' => '1',
                'icon_id' => '1',
                'url' => 'https://github.com/markoboy'
            ));

            DB::table('links')->insert(
            array(
                'id'=>'2',
                'team_member_id' => '1',
                'icon_id' => '2',
                'url' => 'hhttps://github.com/markoboy'
            ));

            DB::table('links')->insert(
                array(
                    'id'=>'3',
                    'team_member_id' => '2',
                    'icon_id' => '1',
                    'url' => 'https://github.com/eslylescano'
                ));


                DB::table('links')->insert(
                    array(
                        'id'=>'4',
                        'team_member_id' => '3',
                        'icon_id' => '1',
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
