<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    //
    public function teamMember(){
        return $this->belongsTo('App\TeamMember');
    }

    public function icons(){
        return $this->hasMany('App\Icon','id','icon_id');

    }
}
