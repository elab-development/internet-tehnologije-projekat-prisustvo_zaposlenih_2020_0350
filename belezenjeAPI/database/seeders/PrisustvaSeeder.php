<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PrisustvaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 100; $i++) {
            \App\Models\Prisustvo::create([
                'dogadjaj_id' => rand(1,4),
                'user_id' => rand(1,10),
                'ocena_id' => rand(1,3),
            ]);
        }
    }
}
