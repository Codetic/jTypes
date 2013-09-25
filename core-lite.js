﻿/*! ------------------------------------------------------------------------
//                             jTypes Lite 1.0.0
//  ------------------------------------------------------------------------
//
//                   Copyright 2013 Gaulinsoft Corporation
//
//       Licensed under the Apache License, Version 2.0 (the "License");
//      you may not use this file except in compliance with the License.
//                   You may obtain a copy of the License at
//
//                 http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
//      distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
//                       limitations under the License.
*/
(function(window, undefined)
{
    // ########## STRICT ##########

    // Enable strict mode
    'use strict';

    // ########## BUILD ##########

    // Create the build version
    var $_version = '1.0.0La284';

    // ########## LANGUAGE ##########

    // Create the compatibility exception message, arguments exception format string, and the exception prefix constants
    var $_lang_compatibility       = 'A browser that supports JavaScript 1.8.5 (MSIE 9+) is required.';
    var $_lang_exception_arguments = '"{0}({1})" has some invalid arguments.';
    var $_lang_exception_prefix    = 'jTypes Error: ';

    // Create the language constants
    var $_lang_$$_derive_internal                  = 'Class must have the internal modifier to inherit from an internal class.';
    var $_lang_$$_field_readonly                   = '"{0}" cannot be set because it is a read-only field.';
    var $_lang_$$_keyword                          = '"{0}" is not a valid class modifier.';
    var $_lang_$$_member_keyword                   = '"{1}" has an invalid {0} modifier "{2}".';
    var $_lang_$$_member_keyword_access_2          = '"{0}" cannot have more than one access modifier.';
    var $_lang_$$_member_keyword_escapsulation     = '"{0}" cannot have the public, protected, or private modifiers because it is {1}.';
    var $_lang_$$_member_keyword_readonly          = '"{0}" cannot have the readonly modifier because it is {1}.';
    var $_lang_$$_member_name_2                    = '"{0}" cannot have more than one definition.';
    var $_lang_$$_member_name_invalid              = '"{1}" is not a valid {0} name.';
    var $_lang_$$_member_name_null                 = '"" is not a valid {0} name.';
    var $_lang_$$_member_name_package              = '"{0}" cannot have modifiers because it is a packaged member definition.';
    var $_lang_$$_member_name_static_2             = '"{0}" cannot have more than one static definition.';
    var $_lang_$$_member_property_accessors        = '"{0}" must have both accessors to have an access modifier on the {1} accessor.';
    var $_lang_$$_member_property_accessors_access = '"{0}" must have a more restrictive access modifier on the {1} accessor.';
    var $_lang_$$_member_property_function         = '"{0}" must have a function for the {1} accessor.';
    var $_lang_$$_member_property_keyword          = '"{0}" has an invalid modifier "{2}" on the {1} accessor.';
    var $_lang_$$_member_property_keyword_access_2 = '"{0}" cannot have access modifiers on both property accessors.';
    var $_lang_$$_member_property_name_2           = '"{0}" cannot have more than one definition for the {1} accessor.';
    var $_lang_$$_member_property_name_invalid     = '"{0}" cannot have a "{1}" property accessor.';
    var $_lang_$$_member_property_name_null        = '"{0}" must have at least one property accessor.';

    // ########## NATIVE CODE ##########

    // ---------- OBJECT ----------
    var $__object                   = Object;
    var $__objectProto__            = $__object.prototype;
    var $__create                   = $__object.create;
    var $__defineProperties         = $__object.defineProperties;
    var $__defineProperty           = $__object.defineProperty;
    var $__freeze                   = $__object.freeze;
    var $__getOwnPropertyDescriptor = $__object.getOwnPropertyDescriptor;
    var $__getOwnPropertyNames      = $__object.getOwnPropertyNames;
    var $__getPrototypeOf           = $__object.getPrototypeOf;
    var $__isExtensible             = $__object.isExtensible;
    var $__isFrozen                 = $__object.isFrozen;
    var $__isSealed                 = $__object.isSealed;
    var $__keys                     = $__object.keys;
    var $__preventExtensions        = $__object.preventExtensions;
    var $__propertyIsEnumerable     = $__object.propertyIsEnumerable;
    var $__seal                     = $__object.seal;
    var $__setPrototypeOf           = $__object.setPrototypeOf || null;
    var $__hasOwnProperty__         = $__objectProto__.hasOwnProperty;
    var $__isPrototypeOf__          = $__objectProto__.isPrototypeOf;
    var $__toString__               = $__objectProto__.toString;
    var $__valueOf__                = $__objectProto__.valueOf;

    // ---------- ARRAY ----------
    var $__array               = Array;
    var $__arrayProto__        = $__array.prototype;
    var $__array_isArray       = $__array.isArray;
    var $__array_every__       = $__arrayProto__.every;
    var $__array_filter__      = $__arrayProto__.filter;
    var $__array_forEach__     = $__arrayProto__.forEach;
    var $__array_indexOf__     = $__arrayProto__.indexOf;
    var $__array_lastIndexOf__ = $__arrayProto__.lastIndexOf;
    var $__array_map__         = $__arrayProto__.map;
    var $__array_reduce__      = $__arrayProto__.reduce;
    var $__array_reduceRight__ = $__arrayProto__.reduceRight;
    var $__array_some__        = $__arrayProto__.some;
    var $__array_toString__    = $__arrayProto__.toString;

    // ---------- BOOLEAN ----------
    var $__boolean            = Boolean;
    var $__booleanProto__     = $__boolean.prototype;
    var $__boolean_toString__ = $__booleanProto__.toString;
    var $__boolean_valueOf__  = $__booleanProto__.valueOf;

    // ---------- DATE ----------
    var $__date            = Date;
    var $__dateProto__     = $__date.prototype;
    var $__date_toString__ = $__dateProto__.toString;
    var $__date_valueOf__  = $__dateProto__.valueOf;

    // ---------- ERROR ----------
    var $__error            = Error;
    var $__errorProto__     = $__error.prototype;
    var $__error_toString__ = $__errorProto__.toString;
    var $__error_valueOf__  = $__errorProto__.valueOf;

    // ---------- FUNCTION ----------
    var $__function            = Function;
    var $__functionProto__     = $__function.prototype;
    var $__function_apply__    = $__functionProto__.apply;
    var $__function_call__     = $__functionProto__.call;
    var $__function_toString__ = $__functionProto__.toString;
    var $__function_valueOf__  = $__functionProto__.valueOf;

    // ---------- NUMBER ----------
    var $__number            = Number;
    var $__numberProto__     = $__number.prototype;
    var $__number_toString__ = $__numberProto__.toString;
    var $__number_valueOf__  = $__numberProto__.valueOf;
    
    // Get the number constants as number primitives
    var $__number_maxValue__         = $__number_valueOf__.call($__number.MAX_VALUE);
    var $__number_minValue__         = $__number_valueOf__.call($__number.MIN_VALUE);
    var $__number_negativeInfinity__ = $__number_valueOf__.call($__number.NEGATIVE_INFINITY);
    var $__number_positiveInfinity__ = $__number_valueOf__.call($__number.POSITIVE_INFINITY);

    // Get the global NaN constant as a number primitive
    var $__NaN__ = $__number_valueOf__.call(NaN);

    // ---------- REGEXP ----------
    var $__regexp            =  RegExp;
    var $__regexpProto__     = $__regexp.prototype;
    var $__regexp_toString__ = $__regexpProto__.toString;
    var $__regexp_valueOf__  = $__regexpProto__.valueOf;

    // ---------- STRING ----------
    var $__string            = String;
    var $__stringProto__     = $__string.prototype;
    var $__string_match__    = $__stringProto__.match;
    var $__string_replace__  = $__stringProto__.replace;
    var $__string_toString__ = $__stringProto__.toString;
    var $__string_trim__     = $__stringProto__.trim;
    var $__string_valueOf__  = $__stringProto__.valueOf;

    // ---------- WINDOW ----------
    var $__window            = null;
    var $__windowProto__     = null;
    var $__window_toString__ = null;
    var $__window_valueOf__  = null;

    // If a window constructor is defined
    if (typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined')
    {
        // Create the window references
        $__window            = Window;
        $__windowProto__     = $__window.prototype;
        $__window_toString__ = $__windowProto__.toString;
        $__window_valueOf__  = $__windowProto__.valueOf;
    }
    
    // If any of the major native code methods from recent JavaScript versions are not found, throw an exception
    if (!$__create || !$__defineProperty || !$__freeze || !$__getPrototypeOf || !$__preventExtensions || !$__seal || !$__array_forEach__ || !$__array_indexOf__ || !$__string_trim__)
        throw $_lang_exception_prefix + $_lang_compatibility;

    // ########## NAMESPACE ##########

    // Create the global namespace
    var $$ = null;

    // ########## EXCEPTIONS ##########

    // Create the exception helpers
    var $_exceptionArguments = function($name, $arguments)
    {
        // If a name was provided, prepend "$$." to the name for reference
        if ($name)
            $name = '$$.' + $name;
        // Set the namespace function as throwing the exception instead
        else
            $name = '$$';

        // Create the types array
        var $types = new $__array($arguments.length);

        // Set the argument types in the types array
        for (var $i = 0, $j = $types.length; $i < $j; $i++)
            $types[$i] = $$.type($arguments[$i]);

        // Return the formatted arguments exception string
        return $_lang_exception_prefix + $$.format($_lang_exception_arguments, $name, $types.join(', '));
    };
    var $_exceptionFormat    = function($message)
    {
        // Return the prefixed formatted exception string with the given arguments
        return $_lang_exception_prefix + $$.format.apply($$, arguments);
    };

    // ########## DEFINES ##########

    // Create the define helpers
    var $_defineField    = function($name, $field, $writable)
    {
        // Define an enumerable field on the global namespace object
        return $__defineProperty($$, $name,
        {
            'configurable': false,
            'enumerable':   true,
            'value':        $field,
            'writable':     !!$writable
        });
    };
    var $_defineMethod   = function($name, $method)
    {
        // If the name contains a space
        if ($name.indexOf(' ') >= 0)
        {
            // Create the method names array
            var $names = $name.split(' ') || '';

            // Define each method in the method names array
            for (var $i = 0, $j = $names.length; $i < $j; $i++)
                $_defineMethod($names[$i], $method);
        }
        // Define a non-enumerable method on the global namespace object
        else
            $__defineProperty($$, $name,
            {
                'configurable': false,
                'enumerable':   true,
                'value':        $method,
                'writable':     false
            });
    };
    var $_defineProperty = function($name, $getMethod, $setMethod)
    {
        // If the name contains a space
        if ($name.indexOf(' ') >= 0)
        {
            // Create the property names array
            var $names = $name.split(' ') || '';

            // Define each property in the property names array
            for (var $i = 0, $j = $names.length; $i < $j; $i++)
                $_defineProperty($names[$i], $getMethod, $setMethod);
        }
        // Define a non-enumerable method on the global namespace object
        else
            $__defineProperty($$, $name,
            {
                'configurable': false,
                'enumerable':   true,
                'get':          $getMethod || undefined,
                'set':          $setMethod || undefined
            });
    };

    // ########## LOCKS ##########

    // Create the internal lock reference
    var $_lock = {};

    // ##########################
    // ########## CORE ##########
    // ##########################

    // ########## CONSTANTS ##########
    
    // Create the internal constants
    var $_const_int_max = 9007199254740992;
    var $_const_int_min = -$_const_int_max;
    var $_const_symbol  = '~jT';

    // ########## KEYS ##########

    // Create the characters string and keys array
    var $_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var $_keys       = [];

    // Append the lowercase characters to the characters string
    $_characters += $_characters.toLowerCase();

    // Create the key generator helper
    var $_keyGenerator = function($length, $noTilde)
    {
        // If no length was provided, use a default length of three
        if (!$length)
            $length = 3;

        // Create the key reference
        var $key = null;

        do
        {
            // Reset the key
            $key = '';

            // Append random characters to the key
            for (var $i = 0, $j = $_characters.length; $i < $length; $i++)
                $key += $_characters.charAt(Math.floor($j * Math.random()));
        }
        // Continue if the key was already found in the keys array
        while ($__array_indexOf__.call($_keys, $key) >= 0);

        // Push the key into the keys array
        $_keys.push($key);

        // If the no tilde flag is set, return the key
        if ($noTilde)
            return $key;

        // Return the key with a tilde
        return '~' + $key;
    };

    // ---------- DEFINITION ----------

    // Create the definition obfuscated key hash flag, key hint, and length setting
    var $_definition_keyHash   = true;
    var $_definition_keyHint   = $_keyGenerator(3);
    var $_definition_keyLength = 3;

    // Create the definition obfuscated keys
    var $_definition_baseClass         = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~baseClass';
    var $_definition_construct         = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~construct';
    var $_definition_expando_class     = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~expandoClass';
    var $_definition_expando_private   = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~expandoPrivate';
    var $_definition_expando_prototype = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~expandoPrototype';
    var $_definition_expando_public    = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~expandoPublic';
    var $_definition_final             = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~final';
    var $_definition_inherits          = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~inherits';
    var $_definition_internal          = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~internal';

    // ---------- PACKAGES ----------

    // Create the member package key hint
    var $_package_keyHint = $_keyGenerator(3);

    // Create the member package flags
    var $_package_value     = 0;
    var $_package_modifiers = 1;
    var $_package_type      = 2;

    // Create the member package flags length
    var $_package_flagCount = 3;

    // ---------- ACCESSOR ----------

    // Create the accessor member flags
    var $_accessor_name      = 0;
    var $_accessor_value     = 1;
    var $_accessor_modifiers = 2;
    var $_accessor_private   = 3;
    var $_accessor_protected = 4;
    var $_accessor_public    = 5;

    // Create the accessor member flags length
    var $_accessor_flagCount = 6;

    // ########## CLASSES ##########

    // Create the base class of all classes and the base prototype of all class prototypes
    var $_class     = function()
    {
        //
    };
    var $_prototype = {};

    // Define the class and prototype "toString()" methods
    var $_class_toString     = function()
    {
        // Return a class type string
        return '[object Class]';
    };
    var $_prototype_toString = function()
    {
        // Return an instance type string
        return '[object Instance]';
    };

    // Define the "toString()" methods on the base class of all classes and the base prototype of all class prototypes
    $__defineProperty($_class, 'toString', { 'value': $_class_toString });
    $__defineProperty($_prototype, 'toString', { 'value': $_prototype_toString });

    // Set the base class of all classes prototype initially with the "writable" flag (due to some weird WebKit bug involving the internal [[Class]] attribute)
    $_class.prototype = $_prototype;

    // Set the base class of all classes prototype without the "writable" flag
    $__defineProperty($_class, 'prototype', { 'value': $_prototype, 'writable': false });

    // ########## FLAGS ##########

    // Create the internal flags
    var $_debug    = true;// DEFAULT
    var $_subclass = false;// DON'T CHANGE

    // ########## COMPILER ##########
    
    // Create the definitions compiler helper functions
    var $_definitionsCompilerAccessorMethod = function($definitions, $privateDefinitions, $protectedDefinitions, $publicDefinitions, $accessor, $type, $hasTwoAccessors)
    {
        // Create the property method definition array
        var $method = new $__array($_definition_member_flagCount);

        // Get the accessor name and private access modifier flag
        var $accessorName    = $accessor[$_accessor_name];
        var $accessorPrivate = $accessor[$_accessor_private];

        // Set the method definition data
        $method[$_definition_member_name]               = $accessorName.substr(5);
        $method[$_definition_member_property_accessors] = $hasTwoAccessors;
        $method[$_definition_member_type]               = $type;
        $method[$_definition_member_value]              = $accessor[$_accessor_value];

        // Create the definition descriptor
        var $descriptor = { 'enumerable': true, 'value': $method };

        // If the accessor has an access modifier
        if ($accessor[$_accessor_modifiers])
        {
            // If the accessor is private, set the method definition in the private definitions object
            if ($accessorPrivate)
                $__defineProperty($privateDefinitions, $accessorName, $descriptor);
            // If the accessor is protected, set the method definition in the protected definitions object
            else if ($accessor[$_accessor_protected])
                $__defineProperty($protectedDefinitions, $accessorName, $descriptor);
            // If the accessor is public, set the method definition in the public definitions object
            else if ($accessor[$_accessor_public])
                $__defineProperty($publicDefinitions, $accessorName, $descriptor);
        }
        // Set the method definition in the definitions object
        else
            $__defineProperty($definitions, $accessorName, $descriptor);
    };
    var $_definitionsCompilerField          = function($definitions, $name, $value, $readonly)
    {
        //
    };
    var $_definitionsCompilerMethod         = function($definitions, $name, $value)
    {
        //
    };
    var $_definitionsCompilerProperty       = function($definitions, $privateDefinitions, $protectedDefinitions, $publicDefinitions, $name, $get, $set)
    {
        //
    };
    var $_definitionsCompiler               = function($privateDefinitions, $protectedDefinitions, $publicDefinitions, $staticDefinitions, $key, $value, $protectedInherits)
    {
        // Break the key string into a keywords array and get the member name
        var $keywords = $__string_trim__.call($key || '').split(' ');
        var $name     = $keywords.pop() || '';

        // If the member is a package
        if (typeof $value === 'function' && $value[$_package_keyHint] === $value)
        {
            // If any keywords were provided other than the static keyword, throw an exception
            if ($keywords.length && $keywords[0] !== 'static')
                throw $_exceptionFormat($_lang_$$_member_name_package, $name);

            // Unlock the package
            $value = $value.call($_lock);

            // Extract the package data
            $keywords = ($value[$_package_modifiers] || '').split(' ');
            $value    = $value[$_package_value];
        }

        // Create the type
        var $type = 'field';

        // If the value is a function, set the type as a method
        if (typeof $value === 'function')
            $type = 'method';
        // If the value is a simple object, set the type as a property
        else if ($value !== null && typeof $value === 'object' && $__getPrototypeOf($value) === $__objectProto__)
            $type = 'property';

        // If the name is empty or whitespace, throw an exception
        if (!$__string_trim__.call($name))
            throw $_exceptionFormat($_lang_$$_member_name_null, $type);

        // If the name is not a valid member name, throw an exception
        if (!$__string_match__.call($name, /^(_|\$|[a-z])[_\$a-z0-9]*$/i))
            throw $_exceptionFormat($_lang_$$_member_name_invalid, $type, $name);

        var $readonly = false;
        var $static   = false;

        var $private   = false;
        var $protected = false;
        var $public    = false;

        for (var $i = 0, $j = $keywords.length; $i < $j; $i++)
        {
            // Get the current keyword
            var $keyword = $keywords[$i];

            // If the keyword is private, set the private flag
            if ($keyword === 'private')
                $private = true;
            // If the keyword is protected, set the protected flag
            else if ($keyword === 'protected')
                $protected = true;
            // If the keyword is public or prototype, set the public flag
            else if ($keyword === 'public' || $keyword === 'prototype')
                $public = true;
            // If the keyword is readonly, set the readonly flag
            else if ($type === 'field' && $keyword === 'readonly')
                $readonly = true;
            // If the keyword is static, set the static flag
            else if ($keyword === 'static')
                $static = true;
            // If a keyword was defined, throw an exception
            else if ($keyword)
                throw $_exceptionFormat($_lang_$$_member_keyword, $type, $name, $keyword);
        }

        // If the member name is invalid, throw an exception
        if ($name === 'as' || $name === 'constructor' || $name === 'is' || $name === 'type' || $name === '__base' || $name === '__this' || $name === '__type')
            throw $_exceptionFormat($_lang_$$_member_name_invalid, 'member', $name);

        // If the member has more than one access modifier, throw an exception
        if ($private && $protected || $private && $public || $protected && $public)
            throw $_exceptionFormat($_lang_$$_member_keyword_access_2, $name);

        // If the member has the static flag
        if ($static)
        {
            // Set the "static" type
            $type = 'static';

            // If the member was already defined in the static definitions object, throw an exception
            if ($__hasOwnProperty__.call($staticDefinitions, $name))
                throw $_exceptionFormat($_lang_$$_member_name_static_2, $name);

            // If the member has encapsulation, throw an exception
            if ($private || $protected || $public)
                throw $_exceptionFormat($_lang_$$_member_keyword_escapsulation, $name, $type);

            // If the member has the read-only flag, throw an exception
            if ($readonly)
                throw $_exceptionFormat($_lang_$$_member_keyword_readonly, $name, $type);
        }
        else
        {
            // If the member was already defined in the non-static definitions objects, throw an exception
            if ($__hasOwnProperty__.call($privateDefinitions, $name) || $__hasOwnProperty__.call($protectedDefinitions, $name) || $__hasOwnProperty__.call($publicDefinitions, $name))
                throw $_exceptionFormat($_lang_$$_member_name_2, $name);

            // If the member is neither protected nor public, set the private flag
            if (!$protected && !$public)
                $private = true;
        }

        // Create the definitions object and descriptor references
        var $definitions = null;
        var $descriptor  = null;

        // If the member is private, set the private definitions object as the reference
        if ($private)
            $definitions = $privateDefinitions;
        // If the member is protected, set the protected definitions object as the reference
        else if ($protected)
            $definitions = $protectedDefinitions;
        // If the member is public, set the public definitions object as the reference
        else if ($public)
            $definitions = $publicDefinitions;

        switch ($type)
        {
            case 'field':

                // If the value is neither undefined nor null
                if ($value !== undefined && $value !== null)
                {
                    // Get the type of the value
                    var $valueType = typeof $value;

                    // If the field does not have a primitive value, set it to null
                    if ($valueType !== 'boolean' && $valueType !== 'number' && $valueType !== 'string')
                        $value = null;
                }

                // Set the field in the definitions object
                $descriptor = $_definitionsCompilerField($definitions, $name, $value, $readonly);

                break;

            case 'method':
                
                // Set the method in the definitions object
                $descriptor = $_definitionsCompilerMethod($definitions, $name, $value);

                break;

            case 'property':

                // Create the get and set method data arrays
                var $get = new $__array($_accessor_flagCount);
                var $set = new $__array($_accessor_flagCount);

                // Create the has get and set accessors flags
                var $hasGet = false;
                var $hasSet = false;

                for (var $propertyKey in $value)
                {
                    // Break the property key string into a keywords array and get the member name and value
                    var $propertyKeywords = $__string_trim__.call($propertyKey || '').split(' ');
                    var $memberName       = $propertyKeywords.pop() || '';
                    var $memberValue      = $value[$propertyKey];

                    // If the member name is empty or whitespace, throw an exception
                    if (!$__string_trim__.call($memberName))
                        throw $_exceptionFormat($_lang_$$_member_property_name_null, $name);

                    var $member = null;

                    // If the member name is not "get"
                    if ($memberName !== 'get')
                    {
                        // If the member name is not "set", throw an exception
                        if ($memberName !== 'set')
                            throw $_exceptionFormat($_lang_$$_member_property_name_invalid, $name, $memberName);

                        // If a set accessor was already provided, throw an exception
                        if ($hasSet)
                            throw $_exceptionFormat($_lang_$$_member_property_name_2, $name, 'set');

                        // Set the flag for the property having a set accessor
                        $hasSet = true;

                        // Set the set method name
                        $set[$_accessor_name] = '~set_' + $name;

                        // Set the set method data object as the member
                        $member = $set;
                    }
                    else
                    {
                        // If a get accessor was already provided, throw an exception
                        if ($hasGet)
                            throw $_exceptionFormat($_lang_$$_member_property_name_2, $name, 'get');

                        // Set the flag for the property having a get accessor
                        $hasGet = true;

                        // Set the get method name
                        $get[$_accessor_name] = '~get_' + $name;

                        // Set the get method data object as the member
                        $member = $get;
                    }

                    // If the member is not a function, throw an exception
                    if (typeof $memberValue !== 'function')
                        throw $_exceptionFormat($_lang_$$_member_property_function, $name, $memberName);

                    // Set the member access modifier flags and value
                    $member[$_accessor_private]   = false;
                    $member[$_accessor_protected] = false;
                    $member[$_accessor_public]    = false;
                    $member[$_accessor_value]     = $memberValue;

                    for (var $i = 0, $j = $propertyKeywords.length; $i < $j; $i++)
                    {
                        // Get the property keyword
                        var $propertyKeyword = $propertyKeywords[$i];

                        // If the property keyword is private, set the private flag
                        if ($propertyKeyword === 'private')
                            $member[$_accessor_private] = true;
                        // If the property keyword is protected, set the protected flag
                        else if ($propertyKeyword === 'protected')
                            $member[$_accessor_protected] = true;
                        // If the property keyword is public, set the public flag
                        else if ($propertyKeyword === 'public')
                            $member[$_accessor_public] = true;
                        // If the property keyword was defined, throw an exception
                        else if ($propertyKeyword)
                            throw $_exceptionFormat($_lang_$$_member_property_keyword, $name, $memberName, $propertyKeyword);
                    }

                    // Check if the member has any access modifiers
                    $member[$_accessor_modifiers] = $member[$_accessor_private] || $member[$_accessor_protected] || $member[$_accessor_public];

                    // If the member has any access modifiers
                    if ($member[$_accessor_modifiers])
                    {
                        // If the member has more than one access modifier, throw an exception
                        if ($member[$_accessor_private] && $member[$_accessor_protected] || $member[$_accessor_private] && $member[$_accessor_public] || $member[$_accessor_protected] && $member[$_accessor_public])
                            throw $_exceptionFormat($_lang_$$_member_keyword_access_2, $memberName);

                        // If the member access modifier is not more restrictive than the property access modifier, throw an exception
                        if ($member[$_accessor_public] || $member[$_accessor_protected] && !$public || $member[$_accessor_private] && $private)
                            throw $_exceptionFormat($_lang_$$_member_property_accessors_access, $name, $memberName);
                    }
                }

                // If there is neither a get nor a set method, throw an exception
                if (!$hasGet && !$hasSet)
                    throw $_exceptionFormat($_lang_$$_member_property_name_null, $name);

                // Check if the property has get and set accessor access modifiers
                var $hasGetModifier = $get[$_accessor_modifiers];
                var $hasSetModifier = $set[$_accessor_modifiers];

                // If the get and set methods both have access modifiers, throw an exception
                if ($hasGetModifier && $hasSetModifier)
                    throw $_exceptionFormat($_lang_$$_member_property_keyword_access_2, $name);

                // If there is no set accessor and the get method has an access modifier, throw an exception
                if (!$hasSet && $hasGetModifier)
                    throw $_exceptionFormat($_lang_$$_member_property_accessors, $name, 'get');

                // If there is no get accessor and the set method has an access modifier, throw an exception
                if (!$hasGet && $hasSetModifier)
                    throw $_exceptionFormat($_lang_$$_member_property_accessors, $name, 'set');

                // Set the property in the definitions objects
                $descriptor = $_definitionsCompilerProperty($definitions, $privateDefinitions, $protectedDefinitions, $publicDefinitions, $name, $hasGet ? $get : null, $hasSet ? $set : null);

                break;

            case 'static':
                
                // Set the member in the static definitions object
                $staticDefinitions[$name] = { 'enumerable': true, 'value': $value };

                break;
        }

        // If the member is protected, set the descriptor in the protected inherits object
        if ($protected && $descriptor)
            $protectedInherits[$name] = $descriptor;
    };
    var $_definitionsCompilerLock           = function($reference)
    {
        // Return the lock wrapper function
        return function()
        {
            // If this function was internally unlocked, return the reference
            if (this === $_lock)
                return $reference;
        };
    };

    // ########## RUNTIME ##########

    //

    // ########## NAMESPACE ##########

    // Create the compiler
    $$ = function()
    {
        // Get the initial arguments
        var $argument    = 0;
        var $baseClass   = null;
        var $constructor = arguments[$argument++];
        var $modifiers   = '';
        var $prototype   = null;
        var $typeof      = typeof $constructor;

        // If the constructor is not a simple object
        if ($constructor === null || $typeof !== 'object' || $__getPrototypeOf($constructor) !== $__objectProto__)
        {
            // Get the prototype
            $prototype = arguments[$argument++];

            // If the constructor is not a function (and therefore not a class)
            if ($typeof !== 'function')
            {
                // If the constructor is not a string, throw an exception
                if ($typeof !== 'string')
                    throw $_exceptionArguments(null, arguments);

                // Use the first argument as the modifiers string
                $modifiers = $constructor;

                // If the prototype is a class
                if (typeof $prototype === 'function' && $prototype[$_definition_keyHint] === $prototype)
                {
                    // Use the second argument as the base class
                    $baseClass   = $prototype;
                    $constructor = arguments[$argument++];
                }
                // Use the second argument as the constructor
                else
                    $constructor = $prototype;

                // If the constructor is not a function or is a class
                if (typeof $constructor !== 'function' || $constructor[$_definition_keyHint] === $constructor)
                {
                    // Use the third argument as the prototype
                    $prototype   = $constructor;
                    $constructor = null;
                }
                // Use the fourth argument as the prototype
                else
                    $prototype = arguments[$argument++];
            }
            // If the constructor is a class
            else if ($constructor[$_definition_keyHint] === $constructor)
            {
                // Use the first argument as the base class
                $baseClass = $constructor;

                // If the prototype is a function and not a class
                if (typeof $prototype === 'function' && $prototype[$_definition_keyHint] !== $prototype)
                {
                    // Use the second argument as the constructor
                    $constructor = $prototype;
                    $prototype   = arguments[$argument++];
                }
                else
                    $constructor = null;
            }

            // If the prototype is not a simple object, throw an exception
            if ($prototype === null || typeof $prototype !== 'object' || $__getPrototypeOf($prototype) !== $__objectProto__)
                throw $_exceptionArguments(null, arguments);
        }
        else
        {
            // Use the first argument as the prototype
            $prototype   = $constructor;
            $constructor = null;
        }

        // If the argument count does not match the number of arguments, throw an exception
        if (arguments.length !== $argument)
            throw $_exceptionArguments(null, arguments);

        // If no constructor was provided
        if (!$constructor)
        {
            // If a base class was provided
            if ($baseClass)
            {
                // Use a default constructor
                $constructor = function()
                {
                    // If a base constructor exists, apply it with the arguments
                    if (this.__base)
                        return this.__base.apply(this, arguments);
                };
            }
            // Use an empty function as the default constructor
            else
                $constructor = function()
                {
                    //
                };
        }

        // Create the flags
        var $final     = false;
        var $internal  = false;

        // Create the expando flags
        var $expandoClass     = false;
        var $expandoPrivate   = false;
        var $expandoPrototype = false;
        var $expandoPublic    = false;

        // If a modifiers string was provided
        if ($modifiers)
        {
            // Create the keywords array
            var $keywords = $__string_trim__.call($modifiers).split(' ');

            for (var $i = 0, $j = $keywords.length; $i < $j; $i++)
            {
                // Get the current keyword
                var $keyword = $keywords[$i];

                // If the keyword is expando
                if ($keyword === 'expando')
                {
                    // Set all the expando flags
                    $expandoClass     = true;
                    $expandoPrivate   = true;
                    $expandoPrototype = true;
                    $expandoPublic    = true;
                }
                // If the keyword is expando-private, set the expando private flag
                else if ($keyword === 'expando-private' || $keyword === 'private-expando')
                    $expandoPrivate = true;
                // If the keyword is expando-public, set the expando public flag
                else if ($keyword === 'expando-public' || $keyword === 'public-expando')
                    $expandoPublic = true;
                // If the keyword is expando-prototype, set the expando prototype flag
                else if ($keyword === 'expando-prototype' || $keyword === 'prototype-expando')
                    $expandoPrototype = true;
                // If the keyword is expando-static, set the expando class flag
                else if ($keyword === 'expando-static' || $keyword === 'static-expando')
                    $expandoClass = true;
                // If the keyword is internal, set the internal flag
                else if ($keyword === 'internal')
                    $internal = true;
                // If the keyword is sealed, set the final flag
                else if ($keyword === 'sealed')
                    $final = true;
                // If a different keyword was provided, throw an exception
                else if ($keyword)
                    throw $_exceptionFormat($_lang_$$_keyword, $keyword);
            }
        }

        // Create the chain array, construct reference, external index, chain level count, and the external type reference
        var $chain     = [];
        var $construct = null;
        var $external  = $internal ? 1 : 0;
        var $inherits  = $__create(null);
        var $levels    = 1;
        var $type      = null;

        // Create the private, protected, and public references along with the static definitions object
        var $classPrivate   = null;
        var $classProtected = null;
        var $classPublic    = null;
        var $classStatic    = $__create(null);

        // If a base class was provided
        if ($baseClass)
        {
            // If the base class is final, throw an exception
            if ($baseClass[$_definition_final])
                throw $_exceptionFormat($_lang_$$_derive_sealed);

            // If the class is not internal and the base class is internal, throw an exception
            if (!$internal && $baseClass[$_definition_internal])
                throw $_exceptionFormat($_lang_$$_derive_internal);

            // Set the subclass flag
            $_subclass = true;

            // Construct the inherited public definition object
            $classPublic = new $baseClass();

            // Reset the subclass flag
            $_subclass = false;

            // Create the current class tracker
            var $current = $baseClass;

            // If a current class was found
            while (typeof $current === 'function' && $current[$_definition_keyHint] === $current)
            {
                // Add the current class to the chain array
                $chain.push($current);

                // If the class is internal and the current class is internal, increment the external index
                if ($internal && $current[$_definition_internal])
                    $external++;

                // Get the next class in the chain
                $current = $current[$_definition_baseClass];
            }

            // Create the private and protected definitions objects
            $classProtected = $__create($classPublic);
            $classPrivate   = $__create($classProtected);
        }
        else
        {
            // Create the private, protected, and public definitions objects
            $classPublic    = new $_class();
            $classProtected = $__create($classPublic);
            $classPrivate   = $__create($classProtected);
        }

        // Compile the class definitions into the definitions objects
        for (var $key in $prototype)
            $_definitionsCompiler($classPrivate, $classProtected, $classPublic, $classStatic, $key, $prototype[$key], $inherits);

        // Create the external type method and internal type method reference
        var $typeExternal = function()
        {
            // Return the external type
            return $type;
        };
        var $typeInternal = null;

        // Create the class
        var $class = function()
        {
            // CREATE PUBLIC INSTANCE (FOR WRAPPERS)
        };

        // If the class is internal, create the internal type method
        if ($internal)
            $typeInternal = function()
            {
                // Return the internal type
                return $class;
            };

        // Prepend the class to the chain array, set the levels count, and set the external type
        $levels = $chain.unshift($class);
        $type   = !$internal || $external < $levels ? $chain[$external] : $_class;

        // Set each static member descriptor from the static descriptors objects in the class
        for (var $classStaticMember in $classStatic)
            $__defineProperty($class, $classStaticMember, $classStatic[$classStaticMember]);

        // Create the constructor definition array
        var $constructorDefinition = new $__array($_definition_member_flagCount);

        // Set the constructor definition data
        $constructorDefinition[$_definition_member_name]  = 'constructor';
        $constructorDefinition[$_definition_member_type]  = 'method';
        $constructorDefinition[$_definition_member_value] = $constructor;

        // Set the constructor in the protected definitions object
        $__defineProperty($classProtected, 'constructor', { 'enumerable': true, 'value': $constructorDefinition });

        // Get the arrays of private, protected, and public member keys
        var $classPrivateKeys   = $__keys($classPrivate);
        var $classProtectedKeys = $__keys($classProtected);
        var $classPublicKeys    = $__keys($classPublic);

        // Create the construct helper function
        $construct = function($instance)
        {
            // If this function was not internally unlocked, return
            if (this !== $_lock)
                return;

            // CREATE PRIVATE INSTANCE (FOR WRAPPERS)
        };

        // Freeze the class definitions objects
        $__freeze($classPrivate);
        $__freeze($classProtected);

        // If the prototype is not expando, freeze the public definitions object
        if (!$expandoPrototype)
            $__freeze($classPublic);

        // Create the class data
        var $data = {};

        // Set the class cache data
        $data[$_definition_baseClass]         = { 'value': $baseClass };
        $data[$_definition_construct]         = { 'value': !$final ? $construct : null};
        $data[$_definition_expando_class]     = { 'value': $expandoClass };
        $data[$_definition_expando_private]   = { 'value': $expandoPrivate };
        $data[$_definition_expando_prototype] = { 'value': $expandoPrototype };
        $data[$_definition_expando_public]    = { 'value': $expandoPublic };
        $data[$_definition_final]             = { 'value': $final };
        $data[$_definition_internal]          = { 'value': $internal };
        $data[$_definition_keyHint]           = { 'value': $class };

        // Set the class data
        $__defineProperties($class, $data);

        // Set the class prototype initially with the "writable" flag (due to some weird WebKit bug involving the internal [[Class]] attribute)
        $class.prototype = $classPublic;

        // Set the class prototype without the "writable" flag
        $__defineProperty($class, 'prototype', { 'value': $classPublic, 'writable': false });

        // If a static "constructor" definition was not provided, set the class constructor reference
        if (!$__hasOwnProperty__.call($classStatic, 'constructor'))
            $class.constructor = $$;

        // If a static "toString()" definition was not provided, set the class toString() method
        if (!$__hasOwnProperty__.call($classStatic, 'toString'))
            $class.toString = $_class_toString;

        // If the class is not expando, freeze the class
        if (!$expandoClass)
            $__freeze($class);

        // Return the class
        return $class;
    };

    // Define the compiler "toString()" method
    $_defineMethod('toString', function()
    {
        // Return the global namespace type string
        return '[object jTypes]';
    });

    // ########## DATA ##########

    // ---------- VERSION ----------
    $_defineField('version', $_version, false);

    // ---------- CLASS + PROTOTYPE ----------
    $_defineField('__class', $_class, false);
    $_defineField('__proto', $_prototype, false);

    // ---------- INTEGER MAX/MIN ----------
    $_defineField('intMax', $_const_int_max, false);
    $_defineField('intMin', $_const_int_min, false);

    // ########## PACKAGES ##########

    // Define the package methods for class members
    $__array_forEach__.call('private protected public static'.split(' '), function($modifier)
    {
        // Define the package method for the access modifier
        $_defineMethod($modifier, function($modifiers, $value)
        {
            // Create the member package
            var $package = new $__array($_package_flagCount);

            switch (arguments.length)
            {
                case 1:

                    // Set the member package data
                    $package[$_package_modifiers] = $modifier;
                    $package[$_package_value]     = $modifiers;

                    break;

                case 2:

                    // If the modifiers string is not a string, throw an exception
                    if (typeof $modifiers !== 'string')
                        throw $_exceptionArguments($modifier, arguments);

                    // Set the member package data
                    $package[$_package_modifiers] = $modifiers ? $modifier + ' ' + $modifiers : $modifier;
                    $package[$_package_value]     = $value;

                    break;

                default:

                    // Throw an exception
                    throw $_exceptionArguments($modifier, arguments);
            }

            // Lock the member package
            $package = $_definitionsCompilerLock($package);

            // Set the member package key hint
            $package[$_package_keyHint] = $package;

            // Return the member package
            return $package;
        });
    });

    // ########## TYPES ##########

    // Define the "type()" method and the "is()" methods for internal JavaScript types
    (function()
    {
        // Create the types lookup
        var $types = $__create(null);

        // Iterate the internal JavaScript types
        $__array_forEach__.call('Array Boolean Date Error Function Number RegExp String'.split(' '), function($type)
        {
            // Get the type keyword
            var $keyword = $type.toLowerCase();

            // Insert the keyword into the types lookup
            $types['[object ' + $type + ']'] = $keyword;

            // Define the "is()" method for the type
            $_defineMethod('is' + $type, function($object)
            {
                // Return true if the object matches the type
                return $$.type($object) === $keyword;
            });
        });

        // [object global]    => CHROME, OPERA
        // [object Window]    => FIREFOX, IE, SAFARI
        // [object DOMWindow] => (LEGACY)

        // Iterate the known aliases of the internal JavaScript window type
        $__array_forEach__.call('global Window DOMWindow'.split(' '), function($alias)
        {
            // Insert the window alias into the types lookup
            $types['[object ' + $alias + ']'] = 'window';
        });

        // Define the type method
        $_defineMethod('type', function($object)
        {
            // If the object is undefined, return the "undefined" type string
            if ($object === undefined)
                return 'undefined';

            // If the object is null, return the "null" type string
            if ($object === null)
                return 'null';

            // If the object is a function, return either the "class" or "function" type string
            if (typeof $object === 'function')
                return $object[$_definition_keyHint] === $object ? 'class': 'function';

            // If the object is the window object, return the "window" type string
            if ($object === window || $object.window === $object && !$__hasOwnProperty__.call($object, 'window') && $__getPrototypeOf($object) === null)
                return 'window';

            // If the object is a class instance, return the "instance" type string
            if ($object instanceof $_class)
                return 'instance';

            // Return the type string from the types lookup using the native "toString()" function
            return $types[$__toString__.call($object)] || 'object';
        });
    })();

    // ########## CHECKS ##########

    // ---------- CLASS ----------
    $_defineMethod('isClass', function($object)
    {
        // Return true if the object is a function and has a class key hint
        return typeof $object === 'function' && $object[$_definition_keyHint] === $object;
    });

    // ---------- INSTANCE ----------
    $_defineMethod('isInstance', function($object)
    {
        // If the object is undefined or null, return false
        if ($object === undefined || $object === null)
            return false;

        // Return true if the object is an instance of a class
        return !!($object instanceof $_class);
    });

    // ---------- NULL ----------
    $_defineMethod('isNull', function($argument)
    {
        // Return true if the argument is null
        return $argument === null;
    });

    // ---------- OBJECT ----------
    $_defineMethod('isObject', function($object)
    {
        // Return true if the object is neither undefined nor null
        return $object !== undefined && $object !== null;
    });

    // ---------- PRIMITIVE ----------
    $_defineMethod('isPrimitive', function($object)
    {
        // If the object is a null reference or undefined, return true
        if ($object === null || $object === undefined)
            return true;

        // Get the primitive type of the object
        var $typeof = typeof $object;

        // Return true if the object is a boolean, number, or string primitive
        return $typeof === 'boolean' || $typeof === 'number' || $typeof === 'string';
    });

    // ---------- UNDEFINED ----------
    $_defineMethod('isUndefined', function($argument)
    {
        // Return true if the argument is undefined
        return $argument === undefined;
    });

    // ---------- WINDOW ----------
    $_defineMethod('isWindow', function($object)
    {
        // If the object is the window object, return true
        if ($object === window)
            return true;

        // If the object is a null reference or undefined, return false
        if ($object === null || $object === undefined)
            return false;

        // Return true if the object is a window reference
        return $$.type($object) === 'window';
    });

    // ########## CASTS ##########

    // ---------- ARRAY ----------
    $_defineMethod('asArray', function($object)
    {
        // If the object is a null reference or undefined, return an empty array
        if ($object === null || $object === undefined)
            return [];

        // If the object is already an array, return the array
        if ($__array_isArray($object))
            return $object;

        // Get the type of the object
        var $type = typeof $object;

        // If the object is a primitive type, return an empty array
        if ($type === 'boolean' || $type === 'number' || $type === 'string')
            return [];

        // Get the object collection length and create the array
        var $length = Math.max(0, $$.asInt($object.length, true));
        var $array  = new $__array($length);

        // Set the object values in the array
        for (var $i = 0; $i < $length; $i++)
            $array[$i] = $object[$i];

        // Return the array
        return $array;
    });

    // ---------- BOOL ----------
    $_defineMethod('asBool', function($object)
    {
        // Return the object cast as a boolean
        return !!$object;
    });

    // ---------- FLOAT ----------
    $_defineMethod('asFloat', function($object)
    {
        // Get the object type
        var $type = $$.type($object);

        // If the object is a string and matches a float, return the object cast as a float
        if ($type === 'string' && $__string_match__.call($__string_trim__.call($object), /^[-+]?[0-9]*\.?[0-9]+(e[-+]?[0-9]+)?$/i))
            return parseFloat($object);

        // If the object is not a number, return NaN
        if ($type !== 'number')
            return NaN;

        // Return the number
        return $object;
    });

    // ---------- INTEGER ----------
    $_defineMethod('asInt', function($object, $finite)
    {
        // Cast the object as a float
        $object = $$.asFloat($object);

        // If the object is not a number, return NaN
        if (isNaN($object))
            return $finite ? 0 : NaN;

        // If the number is greater than the maximum integer, return infinity
        if ($object > $_const_int_max)
            return $finite ? $_const_int_max : Infinity;

        // If the number is less than the minimum integer, return negative infinity
        if ($object < $_const_int_min)
            return $finite ? $_const_int_min : -Infinity;

        // If the number is less than zero, return the number as an integer (rounded towards zero)
        if ($object < 0)
            return Math.ceil($object);

        // Return the number as an integer (rounded towards zero)
        return Math.floor($object);
    });

    // ---------- OBJECT ----------
    $_defineMethod('asObject', function($object)
    {
        // If the object is a null reference or undefined, return an empty object
        if ($object === null || $object === undefined)
            return {};

        // Return the object
        return $object;
    });

    // ---------- STRING ----------
    $_defineMethod('asString', function($object)
    {
        // Get the object type
        var $type = $$.type($object);

        // If the object is a string, return the object
        if ($type === 'string')
            return $object;

        // If the object is a boolean or a number, return the object cast as a string
        if ($type === 'boolean' || $type === 'number')
            return $object + '';

        // Return an empty string
        return '';
    });

    // ########## HELPERS ##########

    // ---------- BASE ----------
    $_defineMethod('base', function($class)
    {
        // CHECK $class
        if (!$$.isClass($class))
        {
            // If the debug flag is set, throw an exception
            if ($$.debug)
                throw $_exceptionArguments('base', arguments);

            return null;
        }

        // Return the base class
        return $class[$_definition_baseClass] || null;
    });

    // ---------- EMPTY ----------
    $_defineMethod('empty', function()
    {
        // Return an empty function
        return function()
        {
            //
        };
    });

    // ---------- FORMAT ----------
    $_defineMethod('format', function($string)
    {
        // CHECK $string
        if (!$$.isString($string))
        {
            // If the debug flag is set, throw an exception
            if ($$.debug)
                throw $_exceptionArguments('format', arguments);

            // Return an empty string
            return '';
        }

        // Get the arguments
        var $arguments = arguments;

        // Return the formatted string
        return $__string_replace__.call($string, /([\{]+)([0-9]+)\}/g, function($0, $1, $2)
        {
            // Get the argument index and create the prepend string
            var $index   = $$.asInt($2, true) + 1;
            var $prepend = $$.asString($1);

            // If an even number of opening-braces were provided or the argument index exceeded the number of arguments, return the unescaped match as the replacement
            if ($prepend.length % 2 === 0 || $index >= $arguments.length)
                return $prepend.substr($prepend.length / 2) + $2 + '}';

            // Return the argument as the replacement
            return $prepend.substr($prepend.length / 2 + 1) + $$.asString($arguments[$index]);
        });
    });

    // ########## SETTINGS ##########

    // ---------- DEBUG ----------
    $_defineProperty('debug', function()
    {
        // Return the debug flag
        return $_debug;
    }, function($v)
    {
        // Set the debug flag
        $_debug = $$.asBool($v);
    });

    // ########## GLOBALS ##########

    // If the AMD module pattern is being used
    if (typeof define === 'function' && define.amd)
    {
        // Define the module
        define(function()
        {
            // Return the global namespace
            return $$;
        });
    }
    // If the CommonJS module pattern is being used
    else if (typeof module !== 'undefined' && module && module.exports)
    {
        // Set the module exports as the global namespace
        module.exports = $$;
    }
    else
    {
        // If the "$$" shorthand global namespace is not already defined or should be overwritten, define/overwrite it
        if (window.$$ === undefined || window.$$ === window.jTypes)
            window.$$ = $$;

        // Define/overwrite the global namespace
        window.jTypes = $$;
    }
})(typeof window !== 'undefined' ? window : {});