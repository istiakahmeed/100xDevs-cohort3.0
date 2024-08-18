class CustomPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.callbacks.forEach((callback) => callback());
      }
    };

    const reject = () => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.callbacks.forEach((callback) => callback());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const callback = () => {
        setTimeout(() => {
          try {
            if (this.state === "fulfilled") {
              const result = onFulfilled ? onFulfilled(this.value) : this.value;
              resolve(result);
            } else if (this.state === "rejected") {
              const result = onRejected ? onRejected(this.value) : this.value;
              reject(result);
            }
          } catch (error) {
            reject(error);
          }
        }, 0);
      };
      if (this.state === "pending") {
        this.callbacks.push(callback);
      } else {
        callback();
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  static resolve(value) {
    return new CustomPromise((resolve, reject) => {
      reject(reason);
    });
  }
  static all(promises) {
    return new CustomPromise((resolve, reject) => {
      const results = [];
      let completedCount = 0;

      promises.forEach((promise, index) => {
        promise.then((result) => {
          results[index] = result;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
          (error) => reject(error);
        });
      });
    });
  }
  static race(promises) {
    return new CustomPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (result) => resolve(result),
          (error) => reject(error)
        );
      });
    });
  }
}

const myPromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from my promise!");
  }, 1000);
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
