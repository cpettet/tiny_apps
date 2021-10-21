const Jasmine = require("jasmine");
const jasmine = new Jasmine();

describe("Tiny Math", () => {
  let tinyMath;

  beforeEach(() => {});

  it("Generates an input screen", () => {});

  it("Creates all number, enter, clear, and decimal keys.", () => {});

  it("Creates the function row (add, subtract, multiply, divide, modulus, exponent", () => {});
});

// describe("MyCustomWidget", () => {
//   let widget;

//   beforeEach(() => {
//     widget = new MyCustomWidget();
//   });

//   it("has on and trigger methods", () => {
//     expect(widget.on).toBeDefined();
//     expect(widget.trigger).toBeDefined();
//   });

//   it("calls the handler when an event is triggered", () => {
//     const trigger = jasmine.createSpy("widget.trigger", widget.trigger);

//     widget.on("foo", (bar) => {
//       console.log("foo:", bar);
//     });

//     widget.trigger("foo", { a: 1 });

//     expect(trigger).toHaveBeenCalledTimes(1);
//   });

//   it("should call the handlers when the events are passed as an object", () => {
//     /*
//     widget.on({
//       foo: () => { },
//       bar: () => { },
//     });
//   */
//   });

//   it("should remove handlers when calling off", () => {});

//   it("should accept multiple types for one handler", () => {
//     // widget.on('foo bar', handler);
//   });
// });
