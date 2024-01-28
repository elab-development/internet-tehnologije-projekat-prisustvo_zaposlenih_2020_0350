<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DogadjajResurs extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'naziv_dogadjaja' => $this->naziv_dogadjaja,
            'vreme_pocetka' => $this->vreme_pocetka,
            'vreme_kraja' => $this->vreme_kraja,
        ];
    }
}
