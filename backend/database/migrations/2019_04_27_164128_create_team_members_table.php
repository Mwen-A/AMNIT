<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team_members', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('full_name')->nullable();
            $table->string('occupation')->nullable();
            $table->string('avatar')->nullable();
            $table->string('email')->nullable();
            $table->timestamps();
        });

        DB::table('team_members')->insert(
            array(
                'id'=>'1',
                'name' => 'Athanasios',
                'last_name' => 'Markou',
                'full_name' => 'Athanasios Markou',
                'occupation' => 'Front-End Developer',
                'avatar' => 'https://avatars0.githubusercontent.com/u/35178536?s=460&v=4',
                'email' => 'thanasismarko@gmail.com'
            ));

            DB::table('team_members')->insert(
            array(
                'id'=>'2',
                'name' => 'Esly',
                'last_name' => 'Mwen',
                'full_name' => 'Esly Lescano',
                'occupation' => 'Full-Stack Web Developer',
                'avatar' => 'https://avatars3.githubusercontent.com/u/11892083?s=460&v=4',
                'email' => 'eslylescano@gmail.com'
            ));

            DB::table('team_members')->insert(
            array(
                'id'=>'3',
                'name' => 'Jennifer',
                'last_name' => 'Mwen',
                'full_name' => 'Jennifer Mwen',
                'occupation' => 'Web Developer',
                'avatar' => 'https://avatars2.githubusercontent.com/u/45672207?s=460&v=4',
                'email' => 'test@email.com'
            )
        );


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team_members');
    }
}
