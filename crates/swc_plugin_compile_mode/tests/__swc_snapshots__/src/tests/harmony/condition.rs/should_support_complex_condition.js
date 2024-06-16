const TARO_TEMPLATES_f0t0 = `import {
  rowModify,
  FlexManager,
  columnModify,
  DynamicCenter,
  getButtonColor,
  TOUCH_EVENT_MAP,
  getFontAttributes,
  commonStyleModify,
  getNodeThresholds,
  BUTTON_THEME_COLOR,
  getStyleAttr,
  getNormalAttributes,
  shouldBindEvent,
  textModify,
  setNormalTextAttributeIntoInstance,
  getImageMode
} from '@tarojs/components'
import {
  NodeType,
  convertNumber2VP,
  TaroElement,
  eventHandler,
  getComponentEventCallback,
  AREA_CHANGE_EVENT_NAME,
  VISIBLE_CHANGE_EVENT_NAME
} from '@tarojs/runtime'
import { 
  createLazyChildren, 
  createChildItem 
} from '../render'

import type {
  TaroTextElement,
  HarmonyStyle,
  TaroButtonElement,
  TaroViewElement,
  TaroAny,
  TaroStyleType,
  TaroTextStyleType
} from '@tarojs/runtime'
import { isString } from '@tarojs/shared'


@Reusable
@Component
export default struct TARO_TEMPLATES_f0t0 {
  node: TaroViewElement = new TaroElement('Ignore')

  dynamicCenter: DynamicCenter = new DynamicCenter()

  aboutToAppear () {
    this.dynamicCenter.bindComponentToNodeWithDFS(this.node, this)
  }

  aboutToReuse(params: TaroAny): void {
    this.node = params.node
    this.dynamicCenter.bindComponentToNodeWithDFS(this.node, this)
  }

  @State node0: TaroElement = new TaroElement('Ignore')
  @State node1: TaroElement = new TaroElement('Ignore')
  @State node2: TaroElement = new TaroElement('Ignore')
  @State node3: TaroElement = new TaroElement('Ignore')
  @State node4: TaroElement = new TaroElement('Ignore')
  @State node5: TaroElement = new TaroElement('Ignore')
  
  build() {
    Column() {
      if ((this.node0.childNodes[0] as TaroElement)._attrs.compileIf) {
        Column() {}
        .attributeModifier(columnModify.setNode(this.node0.childNodes[0] as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node0.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node0.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node0.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node0.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
        .onClick(e => { eventHandler(e, 'click', this.node0.childNodes[0] as TaroElement)) }
      }
      Column() {
        createText(this.node1.childNodes[0] as TaroTextElement)
      }
      .attributeModifier(columnModify.setNode(this.node1 as TaroElement))
      .onVisibleAreaChange(getNodeThresholds(this.node1 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node1 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
      .onAreaChange(getComponentEventCallback(this.node1 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
        (this.node1 as TaroElement)._nodeInfo.areaInfo = res[1]
      }))
      Column() {
        createText(this.node2.childNodes[0] as TaroTextElement)
      }
      .attributeModifier(columnModify.setNode(this.node2 as TaroElement))
      .onVisibleAreaChange(getNodeThresholds(this.node2 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node2 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
      .onAreaChange(getComponentEventCallback(this.node2 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
        (this.node2 as TaroElement)._nodeInfo.areaInfo = res[1]
      }))
      Column() {
        createText(this.node3.childNodes[0] as TaroTextElement)
      }
      .attributeModifier(columnModify.setNode(this.node3 as TaroElement))
      .onVisibleAreaChange(getNodeThresholds(this.node3 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node3 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
      .onAreaChange(getComponentEventCallback(this.node3 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
        (this.node3 as TaroElement)._nodeInfo.areaInfo = res[1]
      }))
      if ((this.node0.childNodes[4] as TaroElement)._attrs.compileIf) {
        Column() {}
        .attributeModifier(columnModify.setNode(this.node4 as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node4 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node4 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node4 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node4 as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      } else {
        Column() {}
        .attributeModifier(columnModify.setNode(this.node0.childNodes[4] as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node0.childNodes[4] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node0.childNodes[4] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node0.childNodes[4] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node0.childNodes[4] as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      }
      if ((this.node0.childNodes[5] as TaroElement)._attrs.compileIf) {
        Column() {
          if ((this.node5.childNodes[0] as TaroElement)._attrs.compileIf) {
            Column() {}
            .attributeModifier(columnModify.setNode(this.node5.childNodes[0] as TaroElement))
            .onVisibleAreaChange(getNodeThresholds(this.node5.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node5.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
            .onAreaChange(getComponentEventCallback(this.node5.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
              (this.node5.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
            }))
          } else {
            Column() {}
            .attributeModifier(columnModify.setNode(this.node5.childNodes[0] as TaroElement))
            .onVisibleAreaChange(getNodeThresholds(this.node5.childNodes[0] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node5.childNodes[0] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
            .onAreaChange(getComponentEventCallback(this.node5.childNodes[0] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
              (this.node5.childNodes[0] as TaroElement)._nodeInfo.areaInfo = res[1]
            }))
          }
        }
        .attributeModifier(columnModify.setNode(this.node5 as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node5 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node5 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node5 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node5 as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      } else {
        Column() {}
        .attributeModifier(columnModify.setNode(this.node0.childNodes[5] as TaroElement))
        .onVisibleAreaChange(getNodeThresholds(this.node0.childNodes[5] as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node0.childNodes[5] as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
        .onAreaChange(getComponentEventCallback(this.node0.childNodes[5] as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
          (this.node0.childNodes[5] as TaroElement)._nodeInfo.areaInfo = res[1]
        }))
      }
    }
    .attributeModifier(columnModify.setNode(this.node0 as TaroElement))
    .onVisibleAreaChange(getNodeThresholds(this.node0 as TaroElement) || [0.0, 1.0], getComponentEventCallback(this.node0 as TaroElement, VISIBLE_CHANGE_EVENT_NAME))
    .onAreaChange(getComponentEventCallback(this.node0 as TaroElement, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
      (this.node0 as TaroElement)._nodeInfo.areaInfo = res[1]
    }))
  }
}
@Builder
function createText (node: TaroTextElement) {
  if (node.nodeType === NodeType.TEXT_NODE) {
    if (node.parentNode) {
      if ((node.parentNode as TaroElement).tagName === 'BUTTON') {
        Text(node.textContent)
          .attributeModifier(textModify.setNode(node?.parentElement as TaroElement, {
            fontSize: getButtonFontSize(node.parentNode as TaroButtonElement),
            color: getButtonColor(node.parentNode as TaroButtonElement, BUTTON_THEME_COLOR.get((node.parentNode as TaroButtonElement)._attrs.type || '').text)
          }))
      } else {
        Text(node.textContent)
          .attributeModifier(textModify.setNode(node?.parentElement as TaroElement))
          .width(getTextInViewWidth(node.parentElement))
      }
    }
  } else {
    Text(node.textContent) {
      // text 下还有标签
      if (node.childNodes.length > 1 || ((node.childNodes[0] && node.childNodes[0] as TaroElement)?.nodeType === NodeType.ELEMENT_NODE)) {
        ForEach(node.childNodes, (item: TaroElement) => {
          createTextChildNode(item)
        }, (item: TaroElement) => item._nid)
      }
    }
    .onClick(shouldBindEvent((e: ClickEvent) => { eventHandler(e, 'click', node) }, node, ['click']))
    .attributeModifier(textModify.setNode(node).withNormalStyle())
    .onVisibleAreaChange(getNodeThresholds(node) || [0.0, 1.0], getComponentEventCallback(node, VISIBLE_CHANGE_EVENT_NAME))
    .onAreaChange(getComponentEventCallback(node, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
      node._nodeInfo.areaInfo = res[1]
    }))
  }
}

@Builder
function createTextChildNode (item: TaroElement) {
  if (item.tagName === 'IMAGE') {
    ImageSpan(item.getAttribute('src'))
      // .attributeModifier(commonStyleModify.setNode(item))
      .objectFit(getImageMode(item.getAttribute('mode')))
      // .verticalAlign(align)
      .width(item._st.hmStyle.width)
      .height(item._st.hmStyle.height)
      .margin({
        top: item._st.hmStyle.marginTop,
        left: item._st.hmStyle.marginLeft,
        right: item._st.hmStyle.marginRight,
        bottom: item._st.hmStyle.marginBottom,
      })
      .padding({
        top: item._st.hmStyle.paddingTop,
        left: item._st.hmStyle.paddingLeft,
        right: item._st.hmStyle.paddingRight,
        bottom: item._st.hmStyle.paddingBottom,
      })
      .textBackgroundStyle({
        color: item._st.hmStyle.backgroundColor,
        radius: {
          topLeft: item._st.hmStyle.borderTopLeftRadius,
          topRight: item._st.hmStyle.borderTopRightRadius,
          bottomLeft: item._st.hmStyle.borderBottomLeftRadius,
          bottomRight: item._st.hmStyle.borderBottomRightRadius,
        }
      })
      .borderRadius({
        topLeft: item._st.hmStyle.borderTopLeftRadius,
        topRight: item._st.hmStyle.borderTopRightRadius,
        bottomLeft: item._st.hmStyle.borderBottomLeftRadius,
        bottomRight: item._st.hmStyle.borderBottomRightRadius
      })
      .onClick(shouldBindEvent((e: ClickEvent) => { eventHandler(e, 'click', item) }, item, ['click']))
  } else if (item.nodeType === NodeType.TEXT_NODE) {
    Span(item.textContent)
  } else if (item.tagName === 'TEXT') {
    Span(item.textContent)
      .attributeModifier((new SpanStyleModify()).setNode(item as TaroTextElement))
      .letterSpacing(item._st.hmStyle.letterSpacing)
      .textBackgroundStyle({
        color: item._st.hmStyle.backgroundColor,
        radius: {
          topLeft: item._st.hmStyle.borderTopLeftRadius,
          topRight: item._st.hmStyle.borderTopRightRadius,
          bottomLeft: item._st.hmStyle.borderBottomLeftRadius,
          bottomRight: item._st.hmStyle.borderBottomRightRadius,
        }
      })
      .onClick(shouldBindEvent((e: ClickEvent) => { eventHandler(e, 'click', item) }, item, ['click']))
  }
}



class SpanStyleModify implements AttributeModifier<SpanAttribute> {
  node: TaroTextElement | null = null
  style: HarmonyStyle | null = null
  overwriteStyle: Record<string, TaroAny> = {}
  withNormal = false

  setNode (node: TaroTextElement) {
    this.node = node
    this.style = getNormalAttributes(this.node)
    return this
  }

  applyNormalAttribute(instance: SpanAttribute): void {
    if (this.node && this.style) {
      setNormalTextAttributeIntoInstance(instance, this.style, this.node)
    }
  }
}


function getButtonFontSize (node: TaroButtonElement): string | number {
  const isMini = node._attrs.size === 'mini'

  return isMini ? convertNumber2VP(26) : convertNumber2VP(36)
}

function getTextInViewWidth (node: TaroElement | null): TaroAny {
  if (node) {
    const hmStyle = node.hmStyle || {}
    const isFlexView = hmStyle.display === 'flex'
    const width: TaroAny = getStyleAttr(node, 'width')
    const isPercentWidth = isString(width) && width.includes('%')

    return isFlexView || isPercentWidth ? null : getStyleAttr(node, 'width')
  }
}

`;
function Index() {
    return <View compileMode="f0t0" _dynamicID="node0">

          {condition1 ? <View onClick={()=>condition2 && doSth()} compileIf={condition1}/> : <View compileIgnore/>}

          <View _dynamicID="node1">{condition1 && ident}</View>

          <View _dynamicID="node2">{condition1 && obj.property}</View>

          <View _dynamicID="node3">{condition1 && fn()}</View>

          {condition1 ? <View className={condition2 ? '' : ''} compileIf={condition1} _dynamicID="node4"/> : <View/>}

          {condition1 ? <View compileIf={condition1} _dynamicID="node5">{condition2 ? <View compileIf={condition2}/> : <View/>}</View> : <View/>}

        </View>;
}