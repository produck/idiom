export * from './Global';

interface TypedArrayConstructor {}
interface AsyncFunctionConstructor {}

export const TypedArray: TypedArrayConstructor;
export const GeneratorFunction: GeneratorFunctionConstructor;
export const AsyncGeneratorFunction: AsyncGeneratorFunctionConstructor;
export const AsyncFunction: AsyncFunctionConstructor;
