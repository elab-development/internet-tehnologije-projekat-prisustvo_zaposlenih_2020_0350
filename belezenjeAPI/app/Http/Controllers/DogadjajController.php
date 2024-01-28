<?php

namespace App\Http\Controllers;

use App\Http\Resources\DogadjajResurs;
use App\Models\Dogadjaj;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DogadjajController extends Controller
{
    public function index()
    {
       $dogadjaji = Dogadjaj::all();
         return response()->json(
             [
                 'poruka' => 'Uspesno ste dobavili dogadjaje',
                 'podaci' => DogadjajResurs::collection($dogadjaji)
             ]
         );
    }

    public function show($id)
    {
        $dogadjaj = Dogadjaj::find($id);
        if($dogadjaj){
            return response()->json(
                [
                    'poruka' => 'Uspesno ste dobavili dogadjaj',
                    'podaci' => new DogadjajResurs($dogadjaj)
                ]
            );
        }
        return response()->json(
            [
                'poruka' => 'Ne postoji dogadjaj sa tim id-em'
            ], 404
        );
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'naziv_dogadjaja' => 'required',
            'vreme_pocetka' => 'required',
            'vreme_kraja' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'poruka' => 'Uneti podaci nisu ispravni',
                'greske' => $validator->errors()
            ], 401);
        }

        $dogadjaj = Dogadjaj::create([
            'naziv_dogadjaja' => $request->naziv_dogadjaja,
            'vreme_pocetka' => $request->vreme_pocetka,
            'vreme_kraja' => $request->vreme_kraja
        ]);

        return response()->json(
            [
                'poruka' => 'Uspesno ste dodali dogadjaj',
                'podaci' => new DogadjajResurs($dogadjaj)
            ]
        );
    }

    public function update(Request $request, $id)
    {
        $dogadjaj = Dogadjaj::find($id);
        if($dogadjaj){

            $validator = Validator::make($request->all(), [
                'naziv_dogadjaja' => 'required',
                'vreme_pocetka' => 'required',
                'vreme_kraja' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'poruka' => 'Uneti podaci nisu ispravni',
                    'greske' => $validator->errors()
                ], 401);
            }

            $dogadjaj->update([
                'naziv_dogadjaja' => $request->naziv_dogadjaja,
                'vreme_pocetka' => $request->vreme_pocetka,
                'vreme_kraja' => $request->vreme_kraja
            ]);
            return response()->json(
                [
                    'poruka' => 'Uspesno ste izmenili dogadjaj',
                    'podaci' => new DogadjajResurs($dogadjaj)
                ]
            );
        }
        return response()->json(
            [
                'poruka' => 'Ne postoji dogadjaj sa tim id-em'
            ], 404
        );
    }

    public function destroy($id)
    {
        $dogadjaj = Dogadjaj::find($id);
        if($dogadjaj){
            $dogadjaj->delete();
            return response()->json(
                [
                    'poruka' => 'Uspesno ste obrisali dogadjaj'
                ]
            );
        }
        return response()->json(
            [
                'poruka' => 'Ne postoji dogadjaj sa tim id-em'
            ], 404
        );
    }
}
