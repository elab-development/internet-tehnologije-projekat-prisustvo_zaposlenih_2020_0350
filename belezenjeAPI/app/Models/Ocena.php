<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ocena extends Model
{
    use HasFactory;

    protected $table = 'ocene';

    protected $fillable = [
        'oznaka',
        'opis',
    ];

    public function prisustva()
    {
        return $this->hasMany(Prisustvo::class);
    }
}