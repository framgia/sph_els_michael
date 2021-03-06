<?php

namespace App\Http\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;

class CategoryUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:30'],
            'description' => ['required', 'max:150'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Name should not be empty',
            'description.required' => 'Description should not be empty',
        ];
    }
}
