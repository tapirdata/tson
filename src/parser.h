#ifndef TSON_PARSER_H_
#define TSON_PARSER_H_

#include <nan.h>

class Parser : public node::ObjectWrap {
  public:
    static void Init();
    static v8::Local<v8::Object> NewInstance(v8::Local<v8::Value> arg);
    double Val() const { return val_; }

  private:
    Parser();
    ~Parser();

    static v8::Persistent<v8::Function> constructor;
    static v8::Persistent<v8::Function> parse;
    static NAN_METHOD(New);
    static NAN_METHOD(Parse);
    double val_;
};

#endif // TSON_PARSER_H_


