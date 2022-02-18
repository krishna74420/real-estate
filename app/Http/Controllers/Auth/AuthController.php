<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $req)
    {
        $credentials = $req->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required|min:6',
        ]);
        $token = Auth::attempt($credentials);
        if ($token)
        {
            return $this->respondWithToken($token);
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }

     /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            // 'refresh_token' => Auth::refresh(),
            'user' => Auth::user()
        ]);
    }
}
