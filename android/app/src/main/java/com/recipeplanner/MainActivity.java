package com.recipeplanner;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RecipePlanner";
  }

  // @Override
  // public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
  //     CalendarEventsPackage.onRequestPermissionsResult(requestCode, permissions, grantResults);
  //     super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  // }
}
