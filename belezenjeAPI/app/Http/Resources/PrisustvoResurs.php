<?php

namespace App\Http\Resources;

use App\Models\Dogadjaj;
use App\Models\Ocena;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PrisustvoResurs extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user = User::find($this->user_id);
        $dogadjaj = Dogadjaj::find($this->dogadjaj_id);
        $ocena = Ocena::find($this->ocena_id);

        return [
            'id' => $this->id,
            'dogadjaj' => new DogadjajResurs($dogadjaj),
            'user' => new UserResurs($user),
            'ocena' => new OcenaResurs($ocena),
        ];
    }
}
