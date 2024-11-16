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
* [`sendTxt(...)`](#sendtxt)
* [`sendHex(...)`](#sendhex)
* [`getAllDevices()`](#getalldevices)
* [`close()`](#close)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

打印方法，没啥用

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### listen(...)

```typescript
listen(option: PortCommunicationOption) => Promise<{ data: string; }>
```

监听对应的串口

| Param        | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| **`option`** | <code><a href="#portcommunicationoption">PortCommunicationOption</a></code> |

**Returns:** <code>Promise&lt;{ data: string; }&gt;</code>

--------------------


### sendTxt(...)

```typescript
sendTxt(data: { message: string; }) => Promise<boolean>
```

发送文本

| Param      | Type                              |
| ---------- | --------------------------------- |
| **`data`** | <code>{ message: string; }</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### sendHex(...)

```typescript
sendHex(data: { message: string; }) => Promise<boolean>
```

发送十六进制，请确保传入的是十六进制数据

| Param      | Type                              |
| ---------- | --------------------------------- |
| **`data`** | <code>{ message: string; }</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### getAllDevices()

```typescript
getAllDevices() => Promise<string[]>
```

获取所有串口列表

**Returns:** <code>Promise&lt;string[]&gt;</code>

--------------------


### close()

```typescript
close() => Promise<boolean>
```

关闭当前打开的串口

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### Interfaces


#### PortCommunicationOption

| Prop              | Type                | Description |
| ----------------- | ------------------- | ----------- |
| **`port`**        | <code>string</code> | 端口          |
| **`baudRate`**    | <code>number</code> | 波特率         |
| **`stopBit`**     | <code>number</code> | 停止位         |
| **`dataBit`**     | <code>number</code> | 数据位         |
| **`parity`**      | <code>number</code> | 校验位         |
| **`flowControl`** | <code>number</code> | 流控          |

</docgen-api>
