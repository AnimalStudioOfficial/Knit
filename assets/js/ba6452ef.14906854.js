"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[334],{8230:e=>{e.exports=JSON.parse('{"functions":[{"name":"CreateController","desc":"Creates a new controller.\\n\\n:::caution\\nControllers must be created _before_ calling `Knit.Start()`.\\n:::\\n```lua\\n-- Create a controller\\nlocal MyController = Knit.CreateController {\\n\\tName = \\"MyController\\",\\n}\\n\\nfunction MyController:KnitStart()\\n\\tprint(\\"MyController started\\")\\nend\\n\\nfunction MyController:KnitInit()\\n\\tprint(\\"MyController initialized\\")\\nend\\n```","params":[{"name":"controllerDef","desc":"","lua_type":"ControllerDef"}],"returns":[{"desc":"","lua_type":"Controller\\n"}],"function_type":"static","source":{"line":181,"path":"src/KnitClient.lua"}},{"name":"AddControllers","desc":"Requires all the modules that are children of the given parent with an optional affix. This is an easy\\nway to quickly load all controllers that might be in a folder.\\n```lua\\nKnit.AddControllers(somewhere.Controllers)\\n```","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"affix","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"{Controller}\\n"}],"function_type":"static","source":{"line":199,"path":"src/KnitClient.lua"}},{"name":"AddControllersDeep","desc":"Requires all the modules that are descendants of the given parent with an optional affix.","params":[{"name":"parent","desc":"","lua_type":"Instance"},{"name":"affix","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"{Controller}\\n"}],"function_type":"static","source":{"line":213,"path":"src/KnitClient.lua"}},{"name":"GetService","desc":"Returns a Service object which is a reflection of the remote objects\\nwithin the Client table of the given service. Throws an error if the\\nservice is not found.\\n\\nIf a service\'s Client table contains RemoteSignals and/or RemoteProperties,\\nthese values are reflected as\\n[ClientRemoteSignals](https://sleitnick.github.io/RbxUtil/api/ClientRemoteSignal) and\\n[ClientRemoteProperties](https://sleitnick.github.io/RbxUtil/api/ClientRemoteProperty).\\n\\n```lua\\n-- Server-side service creation:\\nlocal MyService = Knit.CreateService {\\n\\tName = \\"MyService\\",\\n\\tClient = {\\n\\t\\tMySignal = Knit.CreateSignal(),\\n\\t\\tMyProperty = Knit.CreateProperty(\\"Hello\\"),\\n\\t},\\n}\\nfunction MyService:AddOne(player, number)\\n\\treturn number + 1\\nend\\n\\n-------------------------------------------------\\n\\n-- Client-side service reflection:\\nlocal MyService = Knit.GetService(\\"MyService\\")\\n\\n-- Call a method:\\nlocal num = MyService:AddOne(5) --\x3e 6\\n\\n-- Fire a signal to the server:\\nMyService.MySignal:Fire(\\"Hello\\")\\n\\n-- Listen for signals from the server:\\nMyService.MySignal:Connect(function(message)\\n\\tprint(message)\\nend)\\n\\n-- Observe the initial value and changes to properties:\\nMyService.MyProperty:Observe(function(value)\\n\\tprint(value)\\nend)\\n```\\n\\n:::caution\\nServices are only exposed to the client if the service has remote-based\\ncontent in the Client table. If not, the service will not be visible\\nto the client. `KnitClient.GetService` will only work on services that\\nexpose remote-based content on their Client tables.\\n:::","params":[{"name":"serviceName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Service\\n"}],"function_type":"static","source":{"line":276,"path":"src/KnitClient.lua"}},{"name":"GetController","desc":"Gets the controller by name. Throws an error if the controller\\nis not found.","params":[{"name":"controllerName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Controller\\n"}],"function_type":"static","source":{"line":291,"path":"src/KnitClient.lua"}},{"name":"Start","desc":"Starts Knit. Should only be called once per client.\\n```lua\\nKnit.Start():andThen(function()\\n\\tprint(\\"Knit started!\\")\\nend):catch(warn)\\n```\\n\\nBy default, service methods exposed to the client will return promises.\\nTo change this behavior, set the `ServicePromises` option to `false`:\\n```lua\\nKnit.Start({ServicePromises = false}):andThen(function()\\n\\tprint(\\"Knit started!\\")\\nend):catch(warn)\\n```","params":[{"name":"options","desc":"","lua_type":"KnitOptions?"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"static","source":{"line":319,"path":"src/KnitClient.lua"}},{"name":"OnStart","desc":"Returns a promise that is resolved once Knit has started. This is useful\\nfor any code that needs to tie into Knit controllers but is not the script\\nthat called `Start`.\\n```lua\\nKnit.OnStart():andThen(function()\\n\\tlocal MyController = Knit.GetController(\\"MyController\\")\\n\\tMyController:DoSomething()\\nend):catch(warn)\\n```","params":[],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"static","source":{"line":395,"path":"src/KnitClient.lua"}}],"properties":[{"name":"Player","desc":"Reference to the LocalPlayer.","lua_type":"Player","readonly":true,"source":{"line":103,"path":"src/KnitClient.lua"}},{"name":"Util","desc":"References the Util folder. Should only be accessed when using Knit as\\na standalone module. If using Knit from Wally, modules should just be\\npulled in via Wally instead of relying on Knit\'s Util folder, as this\\nfolder only contains what is necessary for Knit to run in Wally mode.","lua_type":"Folder","readonly":true,"source":{"line":114,"path":"src/KnitClient.lua"}}],"types":[{"name":"Middleware","desc":"","fields":[{"name":"Inbound","lua_type":"ClientMiddleware?","desc":""},{"name":"Outbound","lua_type":"ClientMiddleware?","desc":""}],"source":{"line":7,"path":"src/KnitClient.lua"}},{"name":"ClientMiddlewareFn","desc":"For more info, see [ClientComm](https://sleitnick.github.io/RbxUtil/api/ClientComm/) documentation.","lua_type":"(args: {any}) -> (shouldContinue: boolean, ...: any)","source":{"line":18,"path":"src/KnitClient.lua"}},{"name":"ClientMiddleware","desc":"An array of client middleware functions.","lua_type":"{ClientMiddlewareFn}","source":{"line":25,"path":"src/KnitClient.lua"}},{"name":"PerServiceMiddleware","desc":"","lua_type":"{[string]: Middleware}","source":{"line":31,"path":"src/KnitClient.lua"}},{"name":"ControllerDef","desc":"Used to define a controller when creating it in `CreateController`.","fields":[{"name":"Name","lua_type":"string","desc":""},{"name":"[any]","lua_type":"any","desc":""}],"source":{"line":40,"path":"src/KnitClient.lua"}},{"name":"Controller","desc":"","fields":[{"name":"Name","lua_type":"string","desc":""},{"name":"[any]","lua_type":"any","desc":""}],"source":{"line":51,"path":"src/KnitClient.lua"}},{"name":"Service","desc":"","fields":[{"name":"[any]","lua_type":"any","desc":""}],"source":{"line":61,"path":"src/KnitClient.lua"}},{"name":"KnitOptions","desc":"- `ServicePromises` defaults to `true` and indicates if service methods use promises.\\n- Each service will go through the defined middleware, unless the service\\nhas middleware defined in `PerServiceMiddleware`.","fields":[{"name":"ServicePromises","lua_type":"boolean?","desc":""},{"name":"Middleware","lua_type":"Middleware?","desc":""},{"name":"PerServiceMiddleware","lua_type":"PerServiceMiddleware?","desc":""}],"source":{"line":76,"path":"src/KnitClient.lua"}}],"name":"KnitClient","desc":"","realm":["Client"],"source":{"line":95,"path":"src/KnitClient.lua"}}')}}]);