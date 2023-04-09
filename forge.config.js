module.exports = {
  // packagerConfig specifies options for electron-packager
  packagerConfig: {
    // Specify the source directory of the Electron app
    dir: ".",
    // Specify the output directory for the packaged app
    out: "out",
    // Specify the platform(s) to build the app for
    platform: ["darwin", "win32", "linux"],
    // Specify the architecture(s) to build the app for
    arch: ["x64", "ia32"],
    // Specify the Electron version to build the app with
    electronVersion: "14.0.1",
    // Specify the app name and version
    appVersion: "1.0.0",
    name: "EncOrDecByMohsen",
  },
  // rebuildConfig specifies options for electron-rebuild
  rebuildConfig: {},
  // makers specifies the output formats to build the app in
  makers: [
    // Build a macOS DMG
    {
      name: "@electron-forge/maker-dmg",
      config: {
        name: "EncOrDecByMohsen",
        icon: "icon.icns",
      },
    },
    // Build a Windows installer with Squirrel.Windows
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        config: {
          authors: "Mohsenkhashei",
          description: "Encryption Decryption App",
        },
        name: "EncOrDecByMohsen",
        exe: "EncOrDecByMohsen.exe",
        setupExe: "EncOrDecByMohsen.exe",
        setupIcon: "icon.ico",
      },
    },
    // Build a Linux package with deb
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          maintainer: "Mohsen Khashei",
          description: "My Electron app",
        },
      },
    },
    // Build a Linux package with rpm
    {
      name: "@electron-forge/maker-rpm",
      config: {
        options: {
          maintainer: "Mohsen Khashei",
          homepage: "https://myapp.com",
        },
      },
    },
  ],
};
