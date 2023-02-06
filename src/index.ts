export const ValueTypes = {
  number: { id: "number", name: "Eine Zahl" },
  string: { id: "string", name: "Eine Zeichenfolge" },
  boolean: {
    id: "boolean",
    name: "Wahrheitswert (true oder false)",
  },
  date: {
    id: "date",
    name: "Datum (formatiert als <yyyy-MM-dd HH:mm:ss> oder numerisch als Millisekundenwert)",
  },
};

export type ValueType = keyof typeof ValueTypes;

export const isValueType = (s: string): s is ValueType =>
  !!ValueTypes[s as ValueType];

export type LuxonKey = "millisecond" | "second" | "minute" | "hour" | "day";

export const DurationUnits = {
  ms: {
    id: "ms",
    name: "Millisekunde",
    cat: "duration",
    luxonKey: "millisecond" as LuxonKey,
  },
  s: {
    id: "s",
    name: "Sekunde",
    cat: "duration",
    luxonKey: "second" as LuxonKey,
  },
  min: {
    id: "min",
    name: "Minute",
    cat: "duration",
    luxonKey: "minute" as LuxonKey,
  },
  h: {
    id: "h",
    name: "Stunde",
    cat: "duration",
    luxonKey: "hour" as LuxonKey,
  },
  d: {
    id: "d",
    name: "Tag",
    cat: "duration",
    luxonKey: "day" as LuxonKey,
  },
};

export type DurationUnit = keyof typeof DurationUnits;

export const ValueUnits = Object.assign({}, DurationUnits, {
  "°C": { id: "°C", name: "Grad Celsius", cat: "temperature" },
  W: { id: "W", name: "Watt", cat: "power" },
  Wmin: { id: "Wmin", name: "Wattminute", cat: "energy" },
  Wh: { id: "Wh", name: "Wattstunde", cat: "energy" },
  kWh: { id: "kWh", name: "Kilowattstunde", cat: "energy" },
  V: { id: "V", name: "Volt", cat: "voltage" },
  piece: { id: "piece", name: "Stück", cat: "count" },
  m: { id: "m", name: "Meter", cat: "length" },
  kg: { id: "kg", name: "Kilogramm", cat: "weight" },
  l: { id: "l", name: "Liter", cat: "volume" },
});

export type ValueUnit = keyof typeof ValueUnits;

export const isValueUnit = (s: string): s is ValueUnit =>
  !!ValueUnits[s as ValueUnit];

export const isDurationUnit = (s: string): s is DurationUnit =>
  !!DurationUnits[s as DurationUnit];

export const getCategoryOfUnit = (id: keyof typeof ValueUnits) =>
  ValueUnits[id]?.cat;
