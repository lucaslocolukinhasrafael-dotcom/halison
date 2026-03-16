RewriteEngine On
RewriteCond %{HTTP_HOST} ^halisonrondanin.com.br [NC]
RewriteRule ^(.*)$ https://www.halisonrondanin.com.br/$1 [L,R=301]
