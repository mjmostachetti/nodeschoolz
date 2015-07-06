#include <nan.h>
#ifndef _WIN32
#include <unistd.h>
#endif 

using namespace v8;

NAN_METHOD(Delay) {
	NanScope();

	int delay = args[0].As<Number>()->IntegerValue();
	Local<Function> callback = args[1].As<Function>();

	#ifdef _WIN32
		Sleep(delay);
	#else
		usleep(delay * 1000);
	#endif

	NanMakeCallback(NanGetCurrentContext()->Global(), callback, 0, NULL);

  NanReturnUndefined();
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("delay"), 
  	NanNew<FunctionTemplate>(Delay)->GetFunction());
}

NODE_MODULE(myaddon, Init)