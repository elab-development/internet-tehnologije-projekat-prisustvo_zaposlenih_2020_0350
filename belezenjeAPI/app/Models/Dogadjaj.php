<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dogadjaj extends Model
{
    use HasFactory;

    protected $table = 'dogadjaji';

    protected $fillable = [
        'naziv_dogadjaja',
        'vreme_pocetka',
        'vreme_kraja',
    ];

    public function prisustva()
    {
        return $this->hasMany(Prisustvo::class);
    }
}