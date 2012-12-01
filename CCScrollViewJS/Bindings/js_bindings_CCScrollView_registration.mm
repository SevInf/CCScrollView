//
//  js_bindings_CCScrollView_registration.mm
//  RPS
//
//  Created by Sergej Tatarincev on 28.11.12.
//  Copyright (c) 2012 RisingApp. All rights reserved.
//


#import "js_bindings_config.h"
#import "js_bindings_core.h"
#import "js_bindings_CCScrollView_classes.h"
#import "js_bindings_CCScrollView_registration.h"

void jsb_register_CCScrollView( JSContext *_cx, JSObject *globalO) {
    jsval ns;
    JS_GetProperty(_cx, globalO, "cc", &ns);
    JSObject* CCScrollView = JSVAL_TO_OBJECT(ns);
    
#import "js_bindings_CCScrollView_classes_registration.h"
}