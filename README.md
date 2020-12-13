# KIẾN TRÚC HỆ THỐNG:

+ config: Chứa file config của hệ thống.
+ controllers: Chứa các controller, mỗi controller thì sẽ là tập các nghiệp vụ mà mỗi nghiệp vụ được sinh ra từ nhiều bảng.
+ database: Chứa file dump database.
+ middle-wares: Chứa các file xử lý lỗi của hệ thống: điển hình là lỗi 404 và invalid session.
+ utils: Chứa các file mà sẽ sử dụng trên toàn hệ thống.
+ public: Chứa các file js, css của view của hệ thống.
+ repos: Chứa các fileRepo là các nghiệp vụ xử lý trực tiếp với database.
+ routes: Chứa các phân vùng để mỗi router là tập các controller (mục đích maintain code và code dễ nhìn).
+ views: Chứa các file ejs là template của hệ thống khi render.

# HƯỚNG DẪN SỬ DỤNG:

## Cài database và các bảng từ file config/config.js và database/*.

## Cài đặt:
+ npm i express
+ npm i express-session
+ npm i mysql
+ npm i crypto-js
+ npm i ejs
+ npm i pg
+ npm i moment
+ npm i winston

## Chạy chương trình: node optimizeServer.js

