interface Bird {
  eat(): void;
}

interface FlyerBird {
  fly(): void;
}

interface RunnerBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Toucan implements Bird, FlyerBird {
  public fly() {}

  public eat() {}
}

class Hummingbird implements Bird, FlyerBird {
  public fly() {}

  public eat() {}
}

class Ostrich implements Bird, RunnerBird {
  public eat() {}

  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  public eat() {}

  public swim() {}
}
