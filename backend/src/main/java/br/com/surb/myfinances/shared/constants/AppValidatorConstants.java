package br.com.surb.myfinances.shared.constants;

public class AppValidatorConstants {

  public static final String ROOM_NAME = ".name";
  public static final int ROOM_NAME_MAX_LENGTH = 20;

  public static final String ROOM_SEATS = ".seats";
  public static final int ROOM_SEATS_MIN_VALUE = 1;
  public static final int ROOM_SEATS_MAX_VALUE = 20;

  public static final String MISSING = ".missing";
  public static final String EXCEEDS_MAX_LENGTH = ".exceedsMaxLength";
  public static final String EXCEEDS_MAX_VALUE = ".exceedsMaxValue";
  public static final String BELOW_MIN_VALUE = ".belowMinValue";

  public static final String DUPLICATE = ".duplicate";

  public static final String REQUIRED_FIELD = ".Campo obrigatório";
  public static final String REQUIRED_EMAIL = ".Favor entrar um email válido";
  public static final String REQUIRED_EMAIL_EXIST = ".Email já existe";
  public static final String REQUIRED_PRICE_POSITIVO = ".Preço deve ser um valor positivo";
  public static final String REQUIRED_DATA_PRESENT = ".A data do produto não pode ser futura";
  public static final Integer REQUIRED_SIZE_MIN = 5;
  public static final Integer REQUIRED_SIZE_MAX = 60;
  public static final String REQUIRED_SIZE_MESSAGE = ".Deve ter entre 5 e 60 caracteres";

  private AppValidatorConstants(){}
}
