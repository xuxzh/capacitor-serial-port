# capacitor-serial-port-android

serial port communication

## Install

```bash
npm install capacitor-serial-port-android
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`listen(...)`](#listen)
* [`sendText(...)`](#sendtext)
* [`getAllDevices()`](#getalldevices)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### listen(...)

```typescript
listen(option: PortCommunicationOption) => Promise<{ data: string; }>
```

| Param        | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| **`option`** | <code><a href="#portcommunicationoption">PortCommunicationOption</a></code> |

**Returns:** <code>Promise&lt;{ data: string; }&gt;</code>

--------------------


### sendText(...)

```typescript
sendText(text: string) => Promise<boolean>
```

| Param      | Type                |
| ---------- | ------------------- |
| **`text`** | <code>string</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### getAllDevices()

```typescript
getAllDevices() => Promise<string[]>
```

**Returns:** <code>Promise&lt;string[]&gt;</code>

--------------------


### Interfaces


#### PortCommunicationOption

| Prop           | Type                |
| -------------- | ------------------- |
| **`port`**     | <code>string</code> |
| **`baudRate`** | <code>number</code> |

</docgen-api>
