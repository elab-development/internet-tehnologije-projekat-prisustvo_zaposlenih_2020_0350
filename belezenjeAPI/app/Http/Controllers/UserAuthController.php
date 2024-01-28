<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResurs;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserAuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        if (auth()->attempt($credentials)) {
            $user = auth()->user();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'user' => new UserResurs($user),
                'token' => $token,
                'poruka' => 'Uspesno ste se ulogovali'
            ]);
        }
        return response()->json([
            'poruka' => 'Uneti podaci nisu ispravni'
        ], 401);
    }

    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        return response()->json([
            'poruka' => 'Uspesno ste se izlogovali'
        ]);
    }

    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password'=> 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'poruka' => 'Uneti podaci nisu ispravni',
                'greske' => $validator->errors()
            ], 401);
        }

        $user = User::create([
            'name' => $request->name,
            'email'=> $request->email,
            'password'=> bcrypt($request->password)
        ]);
        $token = $user->createToken('authToken')->plainTextToken;
        return response()->json([
            'user' => new UserResurs($user),
            'token' => $token,
            'poruka' => 'Uspesno ste se registrovali'
        ]);
    }
}
