# Documentação Técnica

## 💡 Tecnologias

Tecnologias utilizadas no projeto:

<img src="https://docs.nestjs.com/assets/logo-small.svg" alt="NestJS" width="65"/>&nbsp;&nbsp;
&nbsp;
<br/>
<img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" alt="MongoDB" width="126"/>&nbsp;&nbsp;
&nbsp;
<br/>
<img src="https://assets.stickpng.com/images/62a765c8bd73a4af5c5d4fbc.png" alt="Jest" width="65"/>&nbsp;&nbsp;
&nbsp;
<br/>
<img src="https://seeklogo.com/images/A/azure-active-directory-logo-9F290C9300-seeklogo.com.png" alt="Azure" width="63"/>&nbsp;&nbsp;
&nbsp;

## 🚀 Como executar

- Clonar o repositório
- Utilize o arquivo `.env-template` como modelo para criar o arquivo `.env` localmente.
- Instale as dependências com `pnpm`
- Inicie o servidor com `pnpm start`

Agora a aplicação está disponivel no endereço [`localhost:3000`](http://localhost:3000).
Acessando [`http://localhost:3000/api`](http://localhost:3000/api) é possivel ver o painel Swagger da API.

# CI/CD para Deploy de Aplicativo em Contêiner no Azure

Este repositório contém um script YAML para automatizar o processo de build e deploy de um aplicativo em contêiner no Azure Web App Service utilizando o Azure DevOps Pipelines.

## Estrutura do Script YAML

O script está dividido em estágios para os diferentes ambientes (Main, Homolog, QA, Develop), acionados pelos branches do Git.

## Detalhes das Etapas

Cada estágio realiza o checkout do código, constrói e envia a imagem do contêiner para o Azure Container Registry e faz o deploy no Azure Web App.

## Variáveis de Ambiente

O script usa variáveis como Build.SourceBranch, ACR_REGISTRY, SVC_CONNECTION, e outras específicas do aplicativo para configurar o ambiente de deploy.

## Configuração e Execução

Antes de executar o pipeline, configure corretamente as variáveis de ambiente no Azure DevOps Pipelines. Faça push das alterações nos branches main, homolog, qa ou develop para acionar o pipeline.

Para mais informações, consulte a documentação do Azure DevOps Pipelines.
