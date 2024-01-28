<?php

namespace App\Http\Controllers;

use App\Http\Resources\OcenaResurs;
use App\Models\Ocena;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OceneController extends Controller
{
    public function index()
    {
        $ocene = Ocena::all();
        return response()->json(
            [
                'poruka' => 'Uspesno ste dobavili ocene',
                'podaci' => OcenaResurs::collection($ocene)
            ]
        );
    }

    public function show($id)
    {
        $ocena = Ocena::find($id);
        if($ocena){
            return response()->json(
                [
                    'poruka' => 'Uspesno ste dobavili ocenu',
                    'podaci' => new OcenaResurs($ocena)
                ]
            );
        }
        return response()->json(
            [
                'poruka' => 'Ne postoji ocena sa tim id-em'
            ], 404
        );
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'oznaka' => 'required',
            'opis' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'poruka' => 'Uneti podaci nisu ispravni',
                'greske' => $validator->errors()
            ], 401);
        }

        $ocena = Ocena::create([
            'oznaka' => $request->oznaka,
            'opis' => $request->opis
        ]);

        return response()->json(
            [
                'poruka' => 'Uspesno ste dodali ocenu',
                'podaci' => new OcenaResurs($ocena)
            ]
        );
    }

    public function update(Request $request, $id)
    {
        $ocena = Ocena::find($id);
        if($ocena){
            $validator = Validator::make($request->all(), [
                'oznaka' => 'required',
                'opis' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'poruka' => 'Uneti podaci nisu ispravni',
                    'greske' => $validator->errors()
                ], 401);
            }

            $ocena->update([
                'oznaka' => $request->oznaka,
                'opis' => $request->opis
            ]);

            return response()->json(
                [
                    'poruka' => 'Uspesno ste izmenili ocenu',
                    'podaci' => new OcenaResurs($ocena)
                ]
            );
        }
        return response()->json(
            [
                'poruka' => 'Ne postoji ocena sa tim id-em'
            ], 404
        );
    }

    public function destroy($id)
    {
        $ocena = Ocena::find($id);
        if($ocena){
            $ocena->delete();
            return response()->json(
                [
                    'poruka' => 'Uspesno ste obrisali ocenu'
                ]
            );
        }
        return response()->json(
            [
                'poruka' => 'Ne postoji ocena sa tim id-em'
            ], 404
        );
    }
}
