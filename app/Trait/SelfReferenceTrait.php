<?php

namespace App\Trait;

/*
 * @var Illuminate\Database\Eloquent\Model $this;
 */

trait SelfReferenceTrait
{
    protected string $parentColumn = 'parent_id';

    public function parent()
    {
        return $this->belongsTo(static::class);
    }

    public function children()
    {
        return $this->hasMany(static::class, $this->parentColumn);
    }

    public function allChildren()
    {
        return $this->children()->with('allChildren');
    }

    public function root()
    {
        return $this->parent
            ? $this->parent->root()
            : $this;
    }
}
