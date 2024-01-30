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
            'naziv_dogadjaja' => 'Sastanak sa direktorom kompanije',
            'vreme_pocetka' => '2024-02-05 14:00:00',
            'vreme_kraja' => '2024-02-05 15:00:00',
        ]);

        Dogadjaj::create([
            'naziv_dogadjaja' => 'IT Konferencija',
            'vreme_pocetka' => '2024-02-06 11:00:00',
            'vreme_kraja' => '2024-02-06 12:00:00',
        ]);

        Dogadjaj::create([
            'naziv_dogadjaja' => 'Obuka za novi program',
            'vreme_pocetka' => '2024-02-07 9:00:00',
            'vreme_kraja' => '2024-02-07 10:00:00',
        ]);
    }
}
