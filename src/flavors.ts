// Same as Flavors in dashpoint.app
export enum APP_VERSION {
    dev,
    prod,
    skigaudi,
    web_dev,
    web_prod,
    other,
  }
  
  // Config for different Flavors
  export interface FlavorConfig {
    flavor: APP_VERSION;
    appName: string;
  }
  
  export function flavorConfig(flavor: APP_VERSION) {
    if (flavor === APP_VERSION.dev || flavor === APP_VERSION.web_dev) {
      return <FlavorConfig>{
        flavor: flavor,
        appName: "Dashpoint Dev",
      };
    }
    if (flavor === APP_VERSION.prod || flavor === APP_VERSION.web_prod) {
      return <FlavorConfig>{
        flavor: flavor,
        appName: "Dashpoint Dev",
      };
    }
    if (flavor === APP_VERSION.skigaudi) {
      return <FlavorConfig>{
        flavor: flavor,
        appName: "Dashpoint Dev",
      };
    }
    return <FlavorConfig>{
      flavor: flavor,
      appName: "Other Platform",
    };
  }
  