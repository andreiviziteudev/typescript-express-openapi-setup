import { HelloWorldController } from './hello-world.controller';
import { MathController } from './math.controller';

const { helloWorld } = new HelloWorldController();
const { sumOfTwo } = new MathController();

// eslint-disable-next-line no-unused-vars
export const operations: Record<string, (...arg: any[]) => any> = { helloWorld, sumOfTwo };
