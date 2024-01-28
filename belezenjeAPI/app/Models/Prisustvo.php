<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prisustvo extends Model
{
    use HasFactory;

    protected $table = 'prisustva';

    protected $fillable = [
        'dogadjaj_id',
        'user_id',
        'ocena_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function dogadjaj()
    {
        return $this->belongsTo(Dogadjaj::class);
    }
}