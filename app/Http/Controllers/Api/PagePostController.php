<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PagePost;

class PagePostController extends Controller
{
    public function postOfPageSection(string $slug)
    {
        $posts = PagePost::where('slug', $slug)->firstOrFail()->allChildren;

        return $posts;
    }

    public function allPostOfPage()
    {
        $posts = PagePost::where('parent_id')->orderBy('created_at', 'desc')->with('allChildren')->get();

        return $posts;
    }
}
