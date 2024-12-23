// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorSerialPort",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorSerialPort",
            targets: ["SerialPortPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "SerialPortPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/SerialPortPlugin"),
        .testTarget(
            name: "SerialPortPluginTests",
            dependencies: ["SerialPortPlugin"],
            path: "ios/Tests/SerialPortPluginTests")
    ]
)