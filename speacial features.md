
# Team Messaging /Flows 

**-**|**Must Have**|**DevExpress**|**KendoUI**|**<del>IgniteUI </del> [^5]**|**Syncfusion**
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
button with loading state|❌|✅|❌|❌|✅
multi select with chips [^1] |✅|🔀 [^4]|✅|❌|✅
modal that doesn't clip content with overflow hidden [^2]|✅|✅|❌|❌|✅
button groups|✅|✅|✅|✅|✅
autocomplete input|❌|✅|✅|✅|✅
rich text editor [^3]|❌|✅|✅|❌|✅
`* = Preferenced from Team`

# Team Lego/Portal

**-**|**DevExpress**|**KendoUI**|**<del>IgniteUI</del>[^5]**|**Syncfusion**
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
Toast|✅|✅|❌|✅
Grid layout /Dock layout with DD |❌|✅|❌|✅
DropDown with Search|✅|❌|❌|❌|
Attachments|✅|✅|❌|✅
`* = Preferenced from Team`

# Team Processes

**-**|**DevExpress**|**KendoUI**|**<del>IgniteUI</del>[^5]**|**Syncfusion**
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
Relation Explorer|🔀[^6]|❎|❎|🔀[^6]
BubbleChart|✅*|❌|❌|✅
Multi Select Dual List Box|✅|❌|❌|✅*
`* = Preferenced from Team`

# Team Financial

**-**|**DevExpress**|**KendoUI**|**<del>IgniteUI</del>[^5]**|**Syncfusion**
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
Pivot Grid|✅|❌[^7]|❌[^7]|✅

`* = Preferenced from Team`



[^1]:  Currently used multi select with chips at Team Messaging [**NG Select Github**](https://ng-select.github.io/ng-select#/multiselect)
[^2]:  theoretically we don't need this if UI elements with dropdowns/tooltips aren't rendered inside the dialog DOM but at root level to avoid any overflow: hidden clipping
[^3]:  it isn't a must have because we can always use a third party library like ckeditor4
[^4]:  it doesn’t seem to be possible to customize the tag template 

    [**DX MultiSelect Example**](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview/Angular/MaterialBlueLight/)
[^5]:  Ignite UI doesn' t provide basic controls for React
[^6]:  Maybe this is possible with the diagram viewer/editor component DX and Syncfusion Provide

    [**DX Diagram Example**](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Diagram/SimpleView/Angular/Light/)
    [**Syncfusion Diagram Example**](https://ej2.syncfusion.com/angular/documentation/diagram/getting-started/)
    
    
[^7]:  Both KendoUI and IgniteUI lack Angular components. They provide only jQuery pivot grid components, that support only OLAP data binding for SSR.
