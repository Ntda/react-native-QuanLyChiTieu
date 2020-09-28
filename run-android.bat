set /p id="(Reminder) Did you start a vm? and is it available in adb? "
start cmd /k react-native start
rem *** HACK ALERT: Sleep for 10 seconds ***
ping -n 10 127.0.0.1 > nul
start cmd /k react-native run-android