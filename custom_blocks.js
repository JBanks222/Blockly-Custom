// Variable Operations

Blockly.Blocks['create_variable'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("create variable")
          .appendField(new Blockly.FieldTextInput("varName"), "VAR_NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("Create a new variable.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['create_variable'] = function(block) {
    var variableName = block.getFieldValue('VAR_NAME');
    var code = 'var ' + variableName + ';\n';
    return code;
  };
  
  Blockly.Blocks['set_variable'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set variable")
          .appendField(new Blockly.FieldTextInput("varName"), "VAR_NAME");
      this.appendValueInput("VALUE")
          .setCheck(null)
          .appendField("to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("Set a variable's value.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['set_variable'] = function(block) {
    var variableName = block.getFieldValue('VAR_NAME');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || 'null';
    var code = variableName + ' = ' + value + ';\n';
    return code;
  };
  
  Blockly.Blocks['get_variable'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("get variable")
          .appendField(new Blockly.FieldTextInput("varName"), "VAR_NAME");
      this.setOutput(true, null);
      this.setColour(120);
      this.setTooltip("Get the value of a variable.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['get_variable'] = function(block) {
    var variableName = block.getFieldValue('VAR_NAME');
    var code = variableName;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  // Arithmetic Operations
  
  Blockly.Blocks['add_numbers'] = {
    init: function() {
      this.appendValueInput("NUM1")
          .setCheck("Number")
          .appendField("add");
      this.appendValueInput("NUM2")
          .setCheck("Number")
          .appendField("to");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("Add two numbers.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['add_numbers'] = function(block) {
    var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_num1 + ' + ' + value_num2;
    return [code, Blockly.JavaScript.ORDER_ADDITION];
  };
  
  Blockly.Blocks['subtract_numbers'] = {
    init: function() {
      this.appendValueInput("NUM1")
          .setCheck("Number")
          .appendField("subtract");
      this.appendValueInput("NUM2")
          .setCheck("Number")
          .appendField("from");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("Subtract the second number from the first.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['subtract_numbers'] = function(block) {
    var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_num2 + ' - ' + value_num1;
    return [code, Blockly.JavaScript.ORDER_SUBTRACTION];
  };
  
  Blockly.Blocks['multiply_numbers'] = {
    init: function() {
      this.appendValueInput("NUM1")
          .setCheck("Number")
          .appendField("multiply");
      this.appendValueInput("NUM2")
          .setCheck("Number")
          .appendField("by");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("Multiply two numbers.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['multiply_numbers'] = function(block) {
    var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_num1 + ' * ' + value_num2;
    return [code, Blockly.JavaScript.ORDER_MULTIPLICATION];
  };
  
  Blockly.Blocks['divide_numbers'] = {
    init: function() {
      this.appendValueInput("NUM1")
          .setCheck("Number")
          .appendField("divide");
      this.appendValueInput("NUM2")
          .setCheck("Number")
          .appendField("by");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("Divide the first number by the second.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['divide_numbers'] = function(block) {
    var value_num1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_num2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_num1 + ' / ' + value_num2;
    return [code, Blockly.JavaScript.ORDER_DIVISION];
  };
  
  // Control Structures
  
  Blockly.Blocks['if_block'] = {
    init: function() {
      this.appendValueInput("CONDITION")
          .setCheck("Boolean")
          .appendField("if");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("do");
      this.setColour(210);
      this.setTooltip("Execute code if the condition is true.");
      this.setHelpUrl("");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
  };
  
  Blockly.JavaScript['if_block'] = function(block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE);
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'if (' + condition + ') {\n' + statements_do + '}\n';
    return code;
  };
  
  Blockly.Blocks['if_else_block'] = {
    init: function() {
      this.appendValueInput("CONDITION")
          .setCheck("Boolean")
          .appendField("if");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("do");
      this.appendStatementInput("ELSE")
          .setCheck(null)
          .appendField("else");
      this.setColour(210);
      this.setTooltip("Execute code if the condition is true, else execute other code.");
      this.setHelpUrl("");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
  };
  
  Blockly.JavaScript['if_else_block'] = function(block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE);
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    var statements_else = Blockly.JavaScript.statementToCode(block, 'ELSE');
    var code = 'if (' + condition + ') {\n' + statements_do + '} else {\n' + statements_else + '}\n';
    return code;
  };
  
  Blockly.Blocks['for_loop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("for")
          .appendField(new Blockly.FieldTextInput("i"), "VAR")
          .appendField("from")
          .appendField(new Blockly.FieldNumber(0), "FROM")
          .appendField("to")
          .appendField(new Blockly.FieldNumber(10), "TO");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("do");
      this.setColour(120);
      this.setTooltip("Loop a certain number of times.");
      this.setHelpUrl("");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
  };
  
  Blockly.JavaScript['for_loop'] = function(block) {
    var variable = block.getFieldValue('VAR');
    var from = block.getFieldValue('FROM');
    var to = block.getFieldValue('TO');
    var statements = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'for (var ' + variable + ' = ' + from + '; ' + variable + ' <= ' + to + '; ' + variable + '++) {\n' + statements + '}\n';
    return code;
  };
  
  Blockly.Blocks['while_loop'] = {
    init: function() {
      this.appendValueInput("CONDITION")
          .setCheck("Boolean")
          .appendField("while");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("do");
      this.setColour(120);
      this.setTooltip("Repeat code while a condition is true.");
      this.setHelpUrl("");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
  };
  
  Blockly.JavaScript['while_loop'] = function(block) {
    var condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_NONE);
    var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'while (' + condition + ') {\n' + statements_do + '}\n';
    return code;
  };
  
  // Comparison Operations
  
  Blockly.Blocks['equals'] = {
    init: function() {
      this.appendValueInput("VALUE1")
          .setCheck(null)
          .appendField("if");
      this.appendValueInput("VALUE2")
          .setCheck(null)
          .appendField("equals");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Check if two values are equal.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['equals'] = function(block) {
    var value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', Blockly.JavaScript.ORDER_ATOMIC);
    var value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value1 + ' == ' + value2;
    return [code, Blockly.JavaScript.ORDER_EQUALITY];
  };
  
  Blockly.Blocks['greater_than'] = {
    init: function() {
      this.appendValueInput("VALUE1")
          .setCheck("Number")
          .appendField("if");
      this.appendValueInput("VALUE2")
          .setCheck("Number")
          .appendField("is greater than");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Check if the first value is greater than the second.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['greater_than'] = function(block) {
    var value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', Blockly.JavaScript.ORDER_ATOMIC);
    var value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value1 + ' > ' + value2;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
  };
  
  Blockly.Blocks['less_than'] = {
    init: function() {
      this.appendValueInput("VALUE1")
          .setCheck("Number")
          .appendField("if");
      this.appendValueInput("VALUE2")
          .setCheck("Number")
          .appendField("is less than");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("Check if the first value is less than the second.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['less_than'] = function(block) {
    var value1 = Blockly.JavaScript.valueToCode(block, 'VALUE1', Blockly.JavaScript.ORDER_ATOMIC);
    var value2 = Blockly.JavaScript.valueToCode(block, 'VALUE2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value1 + ' < ' + value2;
    return [code, Blockly.JavaScript.ORDER_RELATIONAL];
  };
  
  // Function Operations
  
  Blockly.Blocks['define_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("define function")
          .appendField(new Blockly.FieldTextInput("myFunction"), "NAME");
      this.appendStatementInput("STACK")
          .setCheck(null)
          .appendField("do");
      this.setColour(290);
      this.setTooltip("Define a new function.");
      this.setHelpUrl("");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
  };
  
  Blockly.JavaScript['define_function'] = function(block) {
    var name = block.getFieldValue('NAME');
    var statements = Blockly.JavaScript.statementToCode(block, 'STACK');
    var code = 'function ' + name + '() {\n' + statements + '}\n';
    return code;
  };
  
  Blockly.Blocks['call_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("call function")
          .appendField(new Blockly.FieldTextInput("myFunction"), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
      this.setTooltip("Call a defined function.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['call_function'] = function(block) {
    var name = block.getFieldValue('NAME');
    var code = name + '();\n';
    return code;
  };
  
  // Text Operations
  
  Blockly.Blocks['text_value'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("text")
          .appendField(new Blockly.FieldTextInput(""), "TEXT");
      this.setOutput(true, "String");
      this.setColour(160);
      this.setTooltip("A text value.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['text_value'] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = '"' + text + '"';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['concatenate_text'] = {
    init: function() {
      this.appendValueInput("TEXT1")
          .setCheck("String")
          .appendField("join");
      this.appendValueInput("TEXT2")
          .setCheck("String")
          .appendField("and");
      this.setOutput(true, "String");
      this.setColour(160);
      this.setTooltip("Join two pieces of text.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['concatenate_text'] = function(block) {
    var text1 = Blockly.JavaScript.valueToCode(block, 'TEXT1', Blockly.JavaScript.ORDER_ATOMIC);
    var text2 = Blockly.JavaScript.valueToCode(block, 'TEXT2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = text1 + ' + ' + text2;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  // Input/Output Operations
  
  Blockly.Blocks['user_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ask user for")
          .appendField(new Blockly.FieldTextInput("input"), "TEXT");
      this.setOutput(true, "String");
      this.setColour(230);
      this.setTooltip("Get input from the user.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['user_input'] = function(block) {
    var text = block.getFieldValue('TEXT');
    var code = 'prompt("' + text + '")';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['print_block'] = {
    init: function() {
      this.appendValueInput("TEXT")
          .setCheck(null)
          .appendField("print");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("Print text to the console.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['print_block'] = function(block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'console.log(' + text + ');\n';
    return code;
  };
  
  // Data Types
  
  Blockly.Blocks['number_value'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("number")
          .appendField(new Blockly.FieldNumber(0), "NUM");
      this.setOutput(true, "Number");
      this.setColour(230);
      this.setTooltip("A number value.");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['number_value'] = function(block) {
    var number = block.getFieldValue('NUM');
    var code = Number(number);
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['boolean_value'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("boolean")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "BOOL");
      this.setOutput(true, "Boolean");
      this.setColour(210);
      this.setTooltip("A boolean value (true/false).");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['boolean_value'] = function(block) {
    var checkbox = block.getFieldValue('BOOL') == 'TRUE';
    var code = checkbox;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };