<?php

namespace Database\Seeders;

use App\Models\Dogadjaj;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DogadjajSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dogadjaj::create([
            'naziv_dogadjaja' => 'Predavanje Profesora Milana Milovanovića',
            'vreme_pocetka' => '2024-02-03 17:00:00',
            'vreme_kraja' => '2024-02-03 18:00:00',
        ]);

        Dogadjaj::create([
            'naziv_dogadjaja' => 'Casovi kuvanja sa HeltiNenom',
            'vreme_pocetka' => '2024-02-05 19:00:00',
            'vreme_kraja' => '2024-02-05 20:00:00',
        ]);

        Dogadjaj::create([
            'naziv_dogadjaja' => 'Movie night',
            'vreme_pocetka' => '2024-02-06 19:00:00',
            'vreme_kraja' => '2024-02-06 20:00:00',
        ]);

        Dogadjaj::create([
            'naziv_dogadjaja' => 'Only girls night',
            'vreme_pocetka' => '2024-02-07 19:00:00',
            'vreme_kraja' => '2024-02-07 20:00:00',
        ]);
    }
}
