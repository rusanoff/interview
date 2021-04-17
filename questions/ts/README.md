# TypeScript

- [Базовые вопросы](#Базовые-вопросы)
- [Продвинутые вопросы](#Продвинутые-вопросы)

## Базовые вопросы

### Как перегрузить функцию?

```typescript
function add(x: string, y: string): string;
function add(x: number, y: number): number {
  return x + y;
}
```


### К чему можно применять декораторы?

- классы
- свойства
- методы
- аргументы метода


### Когда используется ключевое слово "unknown"?

Когда вы не хотите использовать ключевое слово any и/или заранее не знаете
точный тип, но хотите назначить его позже


### Чем type отличается от interface?

...


### Что такое enum?

...


## Продвинутые вопросы

### Что такое ".map" файл, как и зачем его использовать?

Map-файл — это файл карты исходников, который можно использовать при выполнении отладки.
Его можно сгенерировать, установив опцию компилятора `sourceMap` в `true` в файле
`tsconfig.json`

```json
{
    "compilerOptions": {
        "sourceMap": true
    }
}
```


### Как автоматически получить файлы declaration?

```json
{
    "compilerOptions": {
        "declaration": true
    }
}
```


### Для чего нужен тип "Record"?

Он позволяет создавать типизированную мапу

```typescript
const Person: Record<string, number> = {};
Person.age = 25;
```


### Как сделать все свойства интерфейса необязательными?

Используйте тип `Partial`

```typescript
interface Person {
    name: string;
    age: number;
}

type PartialPerson = Partial<Person>;
```


### Для чего нужен тип "Omit"?

Это новый тип, в котором можно указать свойства, которые будут исключены из исходного типа.

```typescript
type Person = { name: string; age: number; location: string; };
type QuantumPerson = Omit<Person, 'location'>;
// QuantumPerson === { name: string, age: number; };
```



