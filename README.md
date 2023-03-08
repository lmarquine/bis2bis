# Bis2Bis Teste

Instruções para rodar a aplicação do teste

## Rodando a aplicação

Para rodar a aplicação, suba em seu local utilizando Docker ou seguindo sua configuração preferida.
requisitos mínimos - [Devdocs](https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/system-requirements.html)

Recomendado o Docker - [Docker](https://github.com/JeroenBoersma/docker-compose-development)

* Crie um banco de dados local
* Faça a importação do arquivo dump.sql adicionado junto à raiz do projeto
* Altere as configurações do endereço da loja conforme a sua URL local
* Rode composer install na raíz do projeto
```
composer install
```
* Rode os comandos:
```
bin/magento setup:upgrade
bin/magento setup:static-content:deploy -f
```
**\*O comando setup:static-content:deploy é opcional**
* Acesse pelo navegador de sua preferência o endereço configurado no banco de dados

Caso haja dúvidas poderá contactar pelo **WhatsApp** (47) 99636-5402
