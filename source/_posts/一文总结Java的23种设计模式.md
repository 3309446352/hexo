---
abbrlink: ''
abstracts: Java中的23种设计模式主要分为三类：  创建型模式：主要解决对象创建问题 结构型模式：主要解决对象组合问题 行为型模式：主要解决对象之间的交互问题
author: ZMC
categories:
- - 后端
cover: https://raw.githubusercontent.com/3309446352/Images/main/img/da6dfbbebd74043b0692c9098b5aa23fbac7c09afdaa23cf361b661f337b1825.webp
date: '2026-02-16T01:34:57.087270+08:00'
description: description
tags:
- 设计模式
title: 一文总结Java的23种设计模式
updated: '2026-02-16T01:52:08.969+08:00'
---
#  {{title}}

**<!---->**

# 一文总结 Java 的 23 种设计模式

# `Java`的 23 种设计模式

![Central Topic.png](https://raw.githubusercontent.com/3309446352/Images/main/Content/bbc7592b592b44aaa85df3e87f1a9fdctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

`Java`中的 23 种设计模式主要分为三类：

* **创建型模式：主要解决对象创建问题**
* **结构型模式：主要解决对象组合问题**
* **行为型模式：主要解决对象之间的交互问题**

## 创建型模式

`Java`中的创建型设计模式主要用于对象的创建和组装。这些模式通过抽象化和解耦对象的创建过程，可以使系统更加灵活和可扩展。下面是`Java`中的 5 种创建型设计模式：

* **单例模式**：确保一个类只有一个实例，并提供一个全局访问点。
* **工厂模式**：在不暴露创建对象的逻辑的前提下，使用工厂方法来创建对象。
* **抽象工厂模式**：提供一个接口，用于创建相关或依赖对象的系列，而不需要指定实际实现类。
* **建造者模式**：将复杂对象的构建与表示分离，使得同样的构建过程可以创建不同的表示。
* **原型模式**： 通过克隆来创建对象，避免了通过`new`关键字显式调用构造函数的开销。

## 结构型模式

`Java`中的结构型设计模式主要用于描述对象之间的关系，包括类和对象的组合、接口和继承等方面。这些模式可以帮助我们更好地组织和管理代码，提高代码的重用性和可维护性。下面是`Java`中的 7 种结构型设计模式：

* **适配器模式**：将一个类的接口转换成客户希望的另一个接口，使得原本由于接口不兼容而无法一起工作的类可以一起工作。
* **桥接模式**：将抽象部分与它的实现部分分离，以便它们可以独立地变化。
* **组合模式**：将对象组合成树形结构以表示“部分-整体”的层次结构，使得客户端使用单个对象或者组合对象具有一致性。
* **装饰器模式**：动态地给一个对象添加一些额外的职责，就增加功能而言，装饰器模式比生成子类方式更为灵活。
* **外观模式**：为子系统中的一组接口提供一个一致的界面，使得子系统更容易使用。
* **享元模式**：运用共享技术来有效地支持大量细粒度对象的复用。
* **代理模式**：为其他对象提供一种代理以控制对这个对象的访问。

## 行为型模式

`Java`中的行为型设计模式主要用于描述对象之间的通信和协作方式，包括算法、责任链、状态等方面。这些模式可以帮助我们更好地组织和管理代码，提高代码的可维护性和可扩展性。下面是`Java`中的 11 种行为型设计模式：

* **责任链模式**：为解除请求的发送者和接收者之间的耦合，而将请求的处理对象连成一条链，并沿着这条链传递请求，直到有一个对象处理它为止。
* **命令模式**：将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可撤销的操作。
* **解释器模式**：给定一个语言，定义它的文法的一种表示，并定义一个解释器，使用该解释器来解释语言中的句子。
* **迭代器模式**：提供一种方法顺序访问一个聚合对象中各个元素，而又不需要暴露该对象的内部表示。
* **中介者模式**：用一个中介对象封装一系列的对象交互，使得这些对象不需要显示地相互引用，从而降低耦合度。
* **备忘录模式**：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。
* **观察者模式**：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动更新。
* **状态模式**：允许一个对象在其内部状态发生改变时改变其行为，对象看起来似乎修改了它的类。
* **策略模式**：定义一系列的算法，将每个算法封装起来，并使它们之间可以互换。
* **模板方法模式**：定义一个操作中的算法骨架，将一些步骤延迟到子类中。模板方法使得子类可以在不改变算法结构的情况下重新定义算法中的某些步骤。
* **过滤器设计模式**：允许在不改变原始对象的情况下，动态地添加或删除对象的行为。

# 设计原则与设计模式

**在了解完设计模式之后，我们再来了解下:****六大设计原则**

![Central Topic (1).png](https://raw.githubusercontent.com/3309446352/Images/main/Content/8daedd013e1a40f68a348c436b671fc6tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

1. **单一职责原则**：一个类应该只有一个引起它变化的原因。换句话说，一个类应该只有一项职责。这样可以保证类的内聚性，并且降低类之间的耦合性。
2. **开闭原则**：一个软件实体如类、模块和函数应该对扩展开放，对修改关闭。这意味着当需要添加新功能时，应该尽量通过扩展已有代码来实现，而不是修改已有代码。
3. **里氏替换原则**：子类应该能够替换父类并且不影响程序的正确性。这意味着在使用继承时，子类不能修改父类已有的行为，而只能扩展父类的功能。
4. **接口隔离原则**：客户端不应该依赖于它不需要的接口。一个类应该只提供它需要的接口，而不应该强迫客户端依赖于它不需要的接口。
5. **依赖倒置原则**：高层模块不应该依赖于低层模块，它们都应该依赖于抽象。抽象不应该依赖于具体实现，而具体实现应该依赖于抽象。
6. **迪米特法则**：一个对象应该对其他对象保持最少的了解。换句话说，一个对象只应该与它直接相互作用的对象发生交互，而不应该与其它任何对象发生直接的交互。这样可以降低类之间的耦合性，提高系统的灵活性和可维护性。

`设计模式与设计原则他们有什么不同呢？`

**设计原则和设计模式是面向对象设计中的两个重要概念，它们相互关联，但又有不同的含义和作用：**

* **设计原则是一些通用的设计指导方针，它们提供了如何设计一个优秀的软件系统的基本思想和规则。指导着设计者如何组织代码以实现高内聚、低耦合、易扩展和易维护的软件系统。**
* **设计模式则是在特定情况下解决常见问题的经验性解决方案，它们提供了如何实现这些设计原则的具体方法。**

**设计模式往往是在满足设计原则的基础上被应用的。设计模式可以看作是实现设计原则的一种具体方式。**

# 组合使用

**在实际开发中，我们很少只使用单一的设计模式来解决问题，而是将多种设计模式混合使用，以达到更好的效果。**

## 工厂模式 + 单例模式

**使用工厂模式来创建对象，通过单例模式来保证该工厂只有一个实例，从而减少创建对象时的开销。**

**首先，创建一个工厂类，该类使用单例模式来保证只有一个实例，该实例负责创建对象。然后，根据需要创建多个工厂方法，每个方法用于创建不同的对象。**

```
 typescript
 
 public class SingletonFactory {
     private static volatile SingletonFactory instance;
 
     private SingletonFactory() {
         // 私有构造方法
     }
 
     public static SingletonFactory getInstance() {
         if (instance == null) {
             synchronized (SingletonFactory.class) {
                 if (instance == null) {
                     instance = new SingletonFactory();
                 }
             }
         }
         return instance;
     }
 
     public Object createObject(String type) {
         if ("type1".equals(type)) {
             return new Type1();
         } else if ("type2".equals(type)) {
             return new Type2();
         } else {
             throw new IllegalArgumentException("Unsupported type: " + type);
         }
     }
 }
 
 public class Type1 {
     // 类型1实现逻辑
 }
 
 public class Type2 {
     // 类型2实现逻辑
 }
```

`SingletonFactory` 类使用双重检查锁定实现了单例模式，同时提供了一个 `createObject()`方法，该方法根据输入的参数来创建不同的对象。`Type1 和 Type2` 类分别代表了不同类型的对象，它们包含了各自的实现逻辑。

## 模板方法模式 + 策略模式

**使用模板方法模式来定义算法的骨架，同时使用策略模式来定义算法的不同实现方式，以实现更高的灵活性。**

**假设我们要实现一个图片处理程序，可以对不同类型的图片进行处理，包括缩放、旋转和裁剪等操作。具体的处理算法可以根据不同类型的图片而异。**

**首先，我们定义一个抽象类 **`ImageProcessor`，它包含一个模板方法 `processImage()`，该方法定义了一系列的处理步骤，包括打开图片、执行具体的处理算法和保存图片等。其中，具体的处理算法是由策略模式来实现的，我们使用一个抽象策略接口 `ImageProcessingStrategy` 来定义不同的处理算法。

```
 csharp
 
 public abstract class ImageProcessor {
 
     public void processImage() {
         BufferedImage image = openImage();
         ImageProcessingStrategy strategy = createImageProcessingStrategy();
         BufferedImage processedImage = strategy.processImage(image);
         saveImage(processedImage);
     }
 
     protected BufferedImage openImage() {
         // 打开图片的具体实现
     }
 
     protected abstract ImageProcessingStrategy createImageProcessingStrategy();
 
     protected void saveImage(BufferedImage image) {
         // 保存图片的具体实现
     }
 }
 
 public interface ImageProcessingStrategy {
 
     BufferedImage processImage(BufferedImage image);
 }
```

**然后，定义具体的图片处理类 **`JpegProcessor` 和 `PngProcessor`，它们分别继承自 `ImageProcessor`，并实现 `createImageProcessingStrategy()` 方法，返回不同的处理算法策略。

```
 scala
 
 public class JpegProcessor extends ImageProcessor {
 
     @Override
     protected ImageProcessingStrategy createImageProcessingStrategy() {
         return new JpegProcessingStrategy();
     }
 }
 
 public class PngProcessor extends ImageProcessor {
 
     @Override
     protected ImageProcessingStrategy createImageProcessingStrategy() {
         return new PngProcessingStrategy();
     }
 }
```

**最后，定义不同的处理算法策略，例如 **`JpegProcessingStrategy` 和 `PngProcessingStrategy`，它们实现了 `ImageProcessingStrategy` 接口，提供了具体的处理算法实现。

```
 typescript
 
 public class JpegProcessingStrategy implements ImageProcessingStrategy {
 
     @Override
     public BufferedImage processImage(BufferedImage image) {
         // Jpeg 图片处理算法
     }
 }
 
 public class PngProcessingStrategy implements ImageProcessingStrategy {
 
     @Override
     public BufferedImage processImage(BufferedImage image) {
         // Png 图片处理算法
     }
 }
```

**这样，实现一个可扩展和可定制的图片处理程序。在运行时，我们可以根据不同的图片类型选择不同的处理算法，从而实现不同的图片处理效果。**

## 策略模式 + 工厂模式

**使用工厂模式来创建不同的策略对象，然后使用策略模式来选择不同的策略，以实现不同的功能。我们实现一个简单的计算器。**

**首先，我们定义一个 **`CalculatorStrategy` 接口，其中包含了两个方法：`calculate` 用于计算两个数的结果，`getDescription` 用于获取当前策略的描述信息。

```
 csharp
 
 public interface CalculatorStrategy {
     double calculate(double num1, double num2);
     String getDescription();
 }
```

**然后，我们实现几个具体的计算策略类，如加法、减法、乘法和除法：**

```
 typescript
 
 public class AddStrategy implements CalculatorStrategy {
     @Override
     public double calculate(double num1, double num2) {
         return num1 + num2;
     }
 
     @Override
     public String getDescription() {
         return "加法";
     }
 }
 
 public class SubtractStrategy implements CalculatorStrategy {
     @Override
     public double calculate(double num1, double num2) {
         return num1 - num2;
     }
 
     @Override
     public String getDescription() {
         return "减法";
     }
 }
 
 public class MultiplyStrategy implements CalculatorStrategy {
     @Override
     public double calculate(double num1, double num2) {
         return num1 * num2;
     }
 
     @Override
     public String getDescription() {
         return "乘法";
     }
 }
 
 public class DivideStrategy implements CalculatorStrategy {
     @Override
     public double calculate(double num1, double num2) {
         return num1 / num2;
     }
 
     @Override
     public String getDescription() {
         return "除法";
     }
 }
```

**接下来，我们使用工厂模式来创建具体的策略对象。我们创建一个 **`CalculatorStrategyFactory` 工厂类，其中定义了一个 `getCalculatorStrategy` 方法，根据传入的操作符，返回相应的计算策略对象。

```
 arduino
 
 public class CalculatorStrategyFactory {
     public static CalculatorStrategy getCalculatorStrategy(String operator) {
         switch (operator) {
             case "+":
                 return new AddStrategy();
             case "-":
                 return new SubtractStrategy();
             case "*":
                 return new MultiplyStrategy();
             case "/":
                 return new DivideStrategy();
             default:
                 throw new IllegalArgumentException("无效的操作符：" + operator);
         }
     }
 }
```

**我们创建一个 **`Calculator` 类，其中包含一个 `calculate` 方法，根据传入的两个数和操作符，返回计算结果。

```
 csharp
 
 public class Calculator {
     public static double calculate(double num1, double num2, String operator) {
         CalculatorStrategy calculatorStrategy = CalculatorStrategyFactory.getCalculatorStrategy(operator);
         System.out.println("正在执行 " + calculatorStrategy.getDescription() + " 计算");
         return calculatorStrategy.calculate(num1, num2);
     }
 }
 
 //调用计算器
 // 执行加法计算
 double result = Calculator.calculate(10, 5, "+");
  // 输出 15.0
 System.out.println(result);
```

## 适配器模式 + 装饰器模式

**适配器模式用于将一个接口转换成另一个接口，而装饰器模式则用于动态地给对象添加一些额外的职责。当我们需要将一个已有的接口转换成新的接口，并且还需要给对象添加一些额外的职责时，可以使用这两个模式混合使用。**

**首先定义一个需要被适配的接口：**

```
arduino

public interface MediaPlayer {
   public void play(String audioType, String fileName);
}
```

**然后定义一个可以播放 mp3 文件的具体类：**

```
typescript

public class Mp3Player implements MediaPlayer {

   @Override
   public void play(String audioType, String fileName) {
      if(audioType.equalsIgnoreCase("mp3")){
         System.out.println("Playing mp3 file. Name: " + fileName);
      }
   }
}
```

**接下来定义一个适配器，将 **`AdvancedMediaPlayer` 接口转换成 `MediaPlayer` 接口

```
typescript

public class MediaPlayerAdapter implements MediaPlayer {

   AdvancedMediaPlayer advancedMusicPlayer;

   public MediaPlayerAdapter(AdvancedMediaPlayer advancedMusicPlayer){
      this.advancedMusicPlayer = advancedMusicPlayer;
   }

   @Override
   public void play(String audioType, String fileName) {
      if(audioType.equalsIgnoreCase("vlc")
         || audioType.equalsIgnoreCase("mp4")){
         advancedMusicPlayer.play(audioType, fileName);
      }
      else if(audioType.equalsIgnoreCase("mp3")){
         System.out.println("Playing mp3 file. Name: " + fileName);
      }
   }
}
```

**然后定义一个装饰器类，用于在播放 mp3 文件时，动态地添加一些额外的功能：**

```
typescript

public class Mp3PlayerDecorator implements MediaPlayer {

   private MediaPlayer mediaPlayer;

   public Mp3PlayerDecorator(MediaPlayer mediaPlayer) {
      this.mediaPlayer = mediaPlayer;
   }

   @Override
   public void play(String audioType, String fileName) {
      if(audioType.equalsIgnoreCase("mp3")){
         System.out.println("Playing mp3 file with additional features. Name: " + fileName);
         // 添加额外的功能
         System.out.println("Adding equalizer to the mp3 file.");
         mediaPlayer.play(audioType, fileName);
      }
      else {
         mediaPlayer.play(audioType, fileName);
      }
   }
}
```

**最后，我们可以使用适配器和装饰器来播放不同类型的音频文件：**

```
java

public static void main(String[] args) {
   MediaPlayer mediaPlayer = new Mp3Player();
   mediaPlayer.play("mp3", "song.mp3");

   AdvancedMediaPlayer advancedMediaPlayer = new VlcPlayer();
   MediaPlayer mediaPlayerAdapter = new MediaPlayerAdapter(advancedMediaPlayer);
   mediaPlayerAdapter.play("vlc", "movie.vlc");

   MediaPlayer decoratedMediaPlayer = new Mp3PlayerDecorator(mediaPlayer);
   decoratedMediaPlayer.play("mp3", "song.mp3");
}
```

**输出结果**

```
yaml

Playing mp3 file. Name: song.mp3
Playing vlc file. Name: movie.vlc
Playing mp3 file with additional features. Name: song.mp3
Adding equalizer to the mp3 file.
Playing mp3 file. Name: song.mp3
```

## 观察者模式 + 命令模式

**观察者模式用于观察对象的状态变化，并及时通知观察者。而命令模式则用于将一个请求封装成一个对象，可以在运行时动态地切换命令的接收者。当我们需要观察对象的状态变化，并在状态变化时执行一些命令时，可以使用这两个模式混合使用。**

**首先，我们创建一个接口 **`Observer` 来表示观察者对象，其中包含一个 `update()` 方法用于更新观察者状态。

```
csharp

public interface Observer {
    void update();
}
```

**接着，我们创建一个类 **`Subject` 来表示被观察者对象，其中包含一些观察者对象的引用和一些方法用于注册、注销和通知观察者。

```
java

import java.util.ArrayList;
import java.util.List;

public class Subject {
    private List<Observer> observers = new ArrayList<>();

    public void register(Observer observer) {
        observers.add(observer);
    }

    public void unregister(Observer observer) {
        observers.remove(observer);
    }

    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update();
        }
    }
}
```

**接下来，我们创建一个接口 **`Command` 来表示命令对象，其中包含一个 `execute()` 方法用于执行命令。

```
csharp

public interface Command {
    void execute();
}
```

**然后，我们创建一个具体命令类 **`ConcreteCommand`，该类实现了 `Command` 接口，其中包含一个 `Subject` 对象的引用和一个 `execute()` 方法，该方法会调用 `Subject` 对象的 `notifyObservers()` 方法通知观察者对象。

```
java

public class ConcreteCommand implements Command {
    private Subject subject;

    public ConcreteCommand(Subject subject) {
        this.subject = subject;
    }

    @Override
    public void execute() {
        subject.notifyObservers();
    }
}
```

**最后，我们创建一个具体观察者类 **`ConcreteObserver`，该类实现了 `Observer` 接口，其中包含一个 `execute()` 方法，该方法会输出一条消息。

```
typescript

public class ConcreteObserver implements Observer {
    @Override
    public void update() {
        System.out.println("ConcreteObserver received notification.");
    }
}
```

**现在，我们可以使用以下代码将观察者模式和命令模式混合使用：**

```
 java
 
 public class Client {
     public static void main(String[] args) {
         // 创建一个被观察者对象
         Subject subject = new Subject();
 
         // 创建一个观察者对象
         Observer observer = new ConcreteObserver();
 
         // 注册观察者对象
         subject.register(observer);
 
         // 创建一个命令对象
         Command command = new ConcreteCommand(subject);
 
         // 执行命令，通知观察者对象
         command.execute();
     }
 }
 //输出  ConcreteObserver received notification.
```

## 小结

**需要注意的是，混合使用设计模式要谨慎，不要过度使用设计模式，以免代码过于复杂和难以维护。选择合适的设计模式和合适的组合方式，可以使代码更加简洁、高效和易于维护。**

## 原文取自

[一文总结Java的23种设计模式设计模式往往是在满足设计原则的基础上被应用的。设计模式可以看作是实现设计原则的一种具体方 - 掘金](https://juejin.cn/post/7211026540129157180#heading-6)
