<?php

namespace App\Http\Controllers;

use App\Http\Resources\PrisustvoResurs;
use App\Models\Prisustvo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class PrisustvaController extends Controller
{
    public function index()
    {
        $prisustva = Prisustvo::all();
        return response()->json([
            'poruka' => 'Uspesno ste dobavili prisustva',
            'podaci' => PrisustvoResurs::collection($prisustva)
        ]);
    }

    public function show($id)
    {
        $prisustvo = Prisustvo::find($id);
        if($prisustvo){
            return response()->json([
                'poruka' => 'Uspesno ste dobavili prisustvo',
                'podaci' => new PrisustvoResurs($prisustvo)
            ]);
        }
        return response()->json([
            'poruka' => 'Ne postoji prisustvo sa tim id-em'
        ], 404);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'dogadjaj_id' => 'required|numeric',
            'user_id' => 'required|numeric',
            'ocena_id' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'poruka' => 'Uneti podaci nisu ispravni',
                'greske' => $validator->errors()
            ], 401);
        }

        $prisustvo = Prisustvo::create([
            'dogadjaj_id' => $request->dogadjaj_id,
            'user_id' => $request->user_id,
            'ocena_id' => $request->ocena_id
        ]);

        return response()->json([
            'poruka' => 'Uspesno ste dodali prisustvo',
            'podaci' => new PrisustvoResurs($prisustvo)
        ]);
    }

    public function update(Request $request, $id)
    {
        $prisustvo = Prisustvo::find($id);
        if($prisustvo){
            $validator = Validator::make($request->all(), [
                'dogadjaj_id' => 'required|numeric',
                'user_id' => 'required|numeric',
                'ocena_id' => 'required|numeric'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'poruka' => 'Uneti podaci nisu ispravni',
                    'greske' => $validator->errors()
                ], 401);
            }

            $prisustvo->update([
                'dogadjaj_id' => $request->dogadjaj_id,
                'user_id' => $request->user_id,
                'ocena_id' => $request->ocena_id
            ]);

            return response()->json([
                'poruka' => 'Uspesno ste izmenili prisustvo',
                'podaci' => new PrisustvoResurs($prisustvo)
            ]);
        }
        return response()->json([
            'poruka' => 'Ne postoji prisustvo sa tim id-em'
        ], 404);
    }

    public function destroy($id)
    {
        $prisustvo = Prisustvo::find($id);
        if($prisustvo){
            $prisustvo->delete();
            return response()->json([
                'poruka' => 'Uspesno ste obrisali prisustvo'
            ]);
        }
        return response()->json([
            'poruka' => 'Ne postoji prisustvo sa tim id-em'
        ], 404);
    }

    public function findByUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'poruka' => 'Uneti podaci nisu ispravni',
                'greske' => $validator->errors()
            ], 401);
        }

        $prisustva = Prisustvo::where('user_id', $request->user_id)->get();
        return response()->json([
            'poruka' => 'Uspesno ste dobavili prisustva',
            'podaci' => PrisustvoResurs::collection($prisustva)
        ]);
    }

    public function paginatePrisustva(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'po_strani' => 'required|numeric',
            'page' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'poruka' => 'Uneti podaci nisu ispravni',
                'greske' => $validator->errors()
            ], 401);
        }

        $prisustva = Prisustvo::paginate($request->po_strani);
        return response()->json([
            'poruka' => 'Uspesno ste dobavili prisustva',
            'podaci' => PrisustvoResurs::collection($prisustva)
        ]);
    }

    public function findByDogadjaj(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'dogadjaj_id' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'poruka' => 'Uneti podaci nisu ispravni',
                'greske' => $validator->errors()
            ], 401);
        }

        $prisustva = Prisustvo::where('dogadjaj_id', $request->dogadjaj_id)->get();
        return response()->json([
            'poruka' => 'Uspesno ste dobavili prisustva',
            'podaci' => PrisustvoResurs::collection($prisustva)
        ]);
    }

    public function groupPrisustvaByOcena(Request $request)
    {
        $prisustva = DB::table('prisustva')
            ->select(DB::raw('COUNT(*) as broj_prisustava, oznaka'))
            ->join('ocene', 'prisustva.ocena_id', '=', 'ocene.id')
            ->groupBy('oznaka')
            ->get();

        return response()->json([
            'poruka' => 'Uspesno ste dobavili prisustva',
            'podaci' => $prisustva
        ]);
    }

    public function findByOcena(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ocena_id' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'poruka' => 'Uneti podaci nisu ispravni',
                'greske' => $validator->errors()
            ], 401);
        }

        $prisustva = Prisustvo::where('ocena_id', $request->ocena_id)->get();
        return response()->json([
            'poruka' => 'Uspesno ste dobavili prisustva',
            'podaci' => PrisustvoResurs::collection($prisustva)
        ]);
    }
}
