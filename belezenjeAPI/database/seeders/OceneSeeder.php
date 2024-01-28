<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OceneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ocene = [
            ['oznaka' => 'P', 'opis' => 'Prisutan'],
            ['oznaka' => 'L', 'opis' => 'Zakasnio'],
            ['oznaka' => 'A', 'opis' => 'Odsutan']
        ];

        foreach ($ocene as $ocena) {
            \App\Models\Ocena::create($ocena);
        }
    }
}
